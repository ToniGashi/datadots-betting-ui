import './App.css';
import NavBar from './Components/NavBar';
import MainContainer from './Components/MainContainer';
import ReactSidebar from './Components/react-sidebar/ReactSidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  return (
    <ProSidebarProvider>
      <NavBar />
      <div className='flex'>
        <ReactSidebar/>
        <MainContainer/>
      </div>
    </ProSidebarProvider>
  );
}

export default App;
