import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {
  Link, useLocation, useNavigate 
} from "react-router-dom";
const Nav = ({NAVBAR, OPERATORS}) => {
  const navigate = useNavigate()
  const location = useLocation().pathname.split('/');
  const currentOperator = location[1];
  const currentSport = location[2];
  const currentOperatorIndex = OPERATORS.indexOf(currentOperator);
  const listOfSports = Object.keys(NAVBAR[currentOperator]);

  const changeOperator = (direction) => {
    let nextOperator = '';
    if (direction === 'left') { 
      nextOperator = OPERATORS[currentOperatorIndex-1];
    } else {
      nextOperator = OPERATORS[currentOperatorIndex+1];
    }

    if(!NAVBAR[nextOperator]['Football']) {
      const firstSportOnOperator = Object.keys(NAVBAR[nextOperator])[0]
      const firstCountryOnSport = Object.keys(NAVBAR[nextOperator][firstSportOnOperator])[0]
      const firstLeagueOnCountry = NAVBAR[nextOperator][firstSportOnOperator][firstCountryOnSport][0]
      return navigate(`/${nextOperator}/${firstSportOnOperator}/${firstCountryOnSport}/${firstLeagueOnCountry}`)
    } else {
      const firstCountryOnSport = Object.keys(NAVBAR[nextOperator]['Football'])[0]
      const firstLeagueOnCountry = NAVBAR[nextOperator]['Football'][firstCountryOnSport][0]
      return navigate(`/${nextOperator}/${'Football'}/${firstCountryOnSport}/${firstLeagueOnCountry}`)
    }
    
  }

  const getLink = (sport) => {
    const firstCountryOnSport = Object.keys(NAVBAR[currentOperator][sport])[0];
    const firstLeagueOnCountry = NAVBAR[currentOperator][sport][firstCountryOnSport][0];
    return `/${currentOperator}/${sport}/${firstCountryOnSport}/${firstLeagueOnCountry}`
  }

  return (
      <nav className="bg-white border-b-2 shadow-lg flex justify-between">
        <div className="sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex flex-shrink-0">
              <button disabled={currentOperator===OPERATORS[0]} className="disabled:opacity-50" onClick={() => changeOperator('left')} ><FontAwesomeIcon className="text-black text-left text-xl font-bold" icon={faChevronLeft}/></button>
                <h1 className="text-black text-left text-xl font-bold">{currentOperator}</h1>
                <button disabled={currentOperator===OPERATORS[OPERATORS.length-1]} className="disabled:opacity-50" onClick={() => changeOperator('right')}><FontAwesomeIcon className="text-black text-left text-xl font-bold" icon={faChevronRight}/></button>
              </div>
            </div>
          </div>  
        </div>  
        <div className="hidden md:block justify-center self-center">
          <div className="ml-10 flex items-baseline space-x-4">
            {listOfSports.map((sport, i) => (
              <div key={i}>
                <Link to={getLink(sport)} className={`flex pr-2 ${sport===currentSport?'text-teal-500':''}`}><img src={`/logos/${sport.replace(' ', '').toLowerCase()}.jpg`} width="30" height="20" className='mr-2' alt='flag'/>
                  <h1 className=" self-center">{sport}</h1>
                </Link>
              </div>
            ))} 
          </div>
        </div>  
        <div className="flex items-center justify-between w-1/4"> 
              <div className="flex self-center">
                <p className="mt-2">Powered By:</p>  
                <img className="ml-2 mt-1.5 mr-5 h-5" src="/logos/diffusion.jpg" alt='Diffusion' width='90' height='40'></img> 
                <h1 className="mt-2">Designed by:</h1>
                <img className="ml-2 h-10" src="/logos/datadots.jpg" alt='Datadots' width='80'></img>
              </div>
        </div> 
      </nav>
  );
}

export default Nav;

