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

    const firstSportOnOperator = Object.keys(NAVBAR[nextOperator])[0]
    const firstCountryOnSport = Object.keys(NAVBAR[nextOperator][firstSportOnOperator])[0]
    const firstLeagueOnCountry = NAVBAR[nextOperator][firstSportOnOperator][firstCountryOnSport][0]
    return navigate(`/${nextOperator}/${firstSportOnOperator}/${firstCountryOnSport}/${firstLeagueOnCountry}`)
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
              <p key={i}>
                <Link to={getLink(sport)} className={`pr-2 ${sport===currentSport?'text-teal-500':''}`}>{sport}</Link>
              </p>
            ))}
          </div>
        </div>  
        <div className="flex items-center justify-between w-1/4"> 
        </div>
      </nav>
  );
}

export default Nav;
