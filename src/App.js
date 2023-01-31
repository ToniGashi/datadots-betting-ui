import './App.css';
import React, {useState, useEffect} from 'react';
import {Navigate, Route, Routes } from 'react-router-dom'
import { getSidebar, getOperators } from './Components/database/data';
import Home from './Components/Home';
// import { io } from "socket.io-client";

function App() {
  const [sideBarData, setSidebarData] = useState({});
  const [operatorData, setOperatorData] = useState([]); // can be taken from Object.keys(sideBarData)
  const [destinationPath, setDestinationPath] = useState(undefined);

  useEffect(() => {
    getOperatorData();
    getSideBarData();
  }, [])

  const getOperatorData = async() => {
    try {
      const resp = await getOperators();
      setOperatorData(resp);
    } catch (err) {
      console.log('Error getting operator data: ', err.message)
    }
  }

  const getSideBarData = async() => {
    try {
      const resp = await getSidebar();
      setSidebarData(resp);
    } catch (err) {
      console.log('Error getting sidebar data: ', err.message)
    }
  }

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
          <Route path='/:operator/:sport/:country/:league' element={ <Home sideBarData={sideBarData} operatorData={operatorData} /> } />
        </Routes>
      </div>: 
      <div>
        {getNewDestinationPath()}
      </div>
    )
  )
}

export default App;
