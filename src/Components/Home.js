import React, { useEffect, useState } from "react";
import NavBar from './NavBar';
import MainContainer from './MainContainer';
import ReactSidebar from './react-sidebar/ReactSidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import { Circles } from "react-loader-spinner";

const Home = ({sideBarData, operatorData}) => {
  const location = useLocation();
  const [leagueData, setLeagueData] = useState({})
  const [socket, setSocket] = useState();
  const [loading, setLoading] = useState(false);
  const [_, operator, sport, country, league] = location.pathname.split('/').map(curr => curr.replace('%20', ' '));

  // const [dd, mm, yy, dow] = dayInfo(daysFromToday)

  useEffect(() => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!useeffect 1')
      const s = io(process.env.REACT_APP_SOCKET_URL);
      setSocket(s);
      s.connect();
      return () => s.disconnect();
  }, [])

  useEffect(() => {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!useeffect 2')
      if(socket) {
          socket.on('infoUpdate', async (message) => {
            setLeagueData({leagueData, ...message});
            setLoading(false);
          })
          socket.on('disconnected', async (message) => {
            if(socket) {
                socket.disconnect();
            }
          })
          setLoading(true);
          socket.emit('switchScreens', {operator:operator, sport:sport, country:country, league:league});
      }
  }, [operator, sport, country, league, socket])
  
  return (
    <ProSidebarProvider>
        <NavBar NAVBAR={sideBarData} OPERATORS={operatorData}/>
        <div className='flex'>
            <ReactSidebar SIDEBAR={sideBarData}/>
            {loading ? <Circles  height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"/> : 
            <MainContainer leagueData={leagueData} operator={operator} sport={sport} country={country} league={league}/>}
        </div>
    </ProSidebarProvider>
  );
}

export default Home;