import React from "react";
import NavBar from './NavBar';
import MainContainer from './MainContainer';
import ReactSidebar from './react-sidebar/ReactSidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Circles } from "react-loader-spinner";
import ErrorComponent from "./ErrorComponent.js"

const Home = ({sideBarData, operatorData,leagueData, operator, sport, country, league, loading}) => {
  // const [dd, mm, yy, dow] = dayInfo(daysFromToday)
  return (
    ((sideBarData && operatorData.length>0) ?
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
    </ProSidebarProvider> :
    <ErrorComponent />))
}

export default Home;