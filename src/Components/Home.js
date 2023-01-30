import React from 'react';
import NavBar from './NavBar';
import MainContainer from './MainContainer';
import ReactSidebar from './react-sidebar/ReactSidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';

const Home = ({sideBarData, operatorData}) => {
  return (
    <ProSidebarProvider>
        <NavBar NAVBAR={sideBarData} OPERATORS={operatorData}/>
        <div className='flex'>
        <ReactSidebar SIDEBAR={sideBarData}/>
        <MainContainer/>
        </div>
    </ProSidebarProvider>
  );
}

export default Home;