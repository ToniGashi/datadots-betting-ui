import './App.css';
import React, {useState, useEffect, useContext} from 'react';
import {Navigate, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

function App() {
  const location = useLocation();
  const [leagueData, setLeagueData] = useState({})
  const [sideBarData, setSidebarData] = useState(undefined);
  const [operatorData, setOperatorData] = useState(undefined); // can be taken from Object.keys(sideBarData)
  const [destinationPath, setDestinationPath] = useState(undefined);
  const [socket, setSocket] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [_, operator, sport, country, league] = location.pathname.split('/').map(curr => curr.replace('%20', ' '));

  useEffect(() => {
    const s = io(process.env.REACT_APP_SOCKET_URL);
    setSocket(s);
    s.connect();
    return () => s.disconnect();
  }, [])

  useEffect(() => {
    if(socket) {
      socket.on('infoUpdate', (message) => {
        setLeagueData(() => {return {leagueData, ...message}});
        setLoading(false);
      })
      socket.on('operatorsUpdate', (message) =>{
        setOperatorData(message); //
        setLoading(false);
      })
      socket.on('sidebar', (message) =>{
        console.log(message)
        setSidebarData(message); //
        setLoading(false);
      })
      socket.on('disconnected', async (message) => {
        if(socket) {
          socket.disconnect();
        }
      })
      socket.emit('operators');
      socket.emit('sidebar');
      setLoading(true);
    }
  }, [socket])

  useEffect(() => {
    if(socket) {
      socket.emit('switchScreens', {operator:operator, sport:sport, country:country, league:league});
    }
  }, [league])

  const getNewDestinationPath = () => {
    if(sideBarData && operatorData.length>1){
      const firstOperator = operatorData[0];
      const firstSportOnOperator = Object.keys(sideBarData[firstOperator])[0]
      const firstCountryOnSport = Object.keys(sideBarData[firstOperator][firstSportOnOperator])[0]
      const firstLeagueOnCountry = sideBarData[firstOperator][firstSportOnOperator][firstCountryOnSport][0]
      setDestinationPath(`/${firstOperator}/${firstSportOnOperator}/${firstCountryOnSport}/${firstLeagueOnCountry}`);
    }
  }

  return (
    (destinationPath ?
      <div>
        <Routes>
          <Route path='/' element = {<Navigate to={destinationPath}/> } />
          <Route path='/:operator/:sport/:country/:league' element={ <Home sideBarData={sideBarData} operatorData={operatorData} leagueData={leagueData} operator={operator} sport={sport} country={country} loading={loading} league={league}/> } />
        </Routes>
      </div>: 
      <div>
        {getNewDestinationPath()}
      </div>
    )
  )
}

export default App;
