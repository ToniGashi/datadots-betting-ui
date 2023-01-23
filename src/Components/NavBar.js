import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faBasketball, faMitten, faTableTennisPaddleBall, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {
  Link, useLocation, useNavigate 
} from "react-router-dom";
import {OPERATORS} from "./database/data";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname.split('/');
  const operator = location[1];
  const sport = location[2];

  const currentOperatorIndex = OPERATORS.indexOf(operator);

  const changeOperator = (direction) => {
    if (direction === 'left') { 
      navigate(`/${OPERATORS[currentOperatorIndex-1]}/${sport}/seriaa`)
    } else {
      navigate(`/${OPERATORS[currentOperatorIndex+1]}/${sport}/seriaa`)
    }
  }

  return (
      <nav className="bg-white border-b-2 shadow-lg flex justify-between">
        <div className="sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex flex-shrink-0">
              <button disabled={operator===OPERATORS[0]} className="disabled:opacity-50" onClick={() => changeOperator('left')} ><FontAwesomeIcon className="text-black text-left text-xl font-bold" icon={faChevronLeft}/></button>
                <h1 className="text-black text-left text-xl font-bold">{operator}</h1>
                <button disabled={operator===OPERATORS[OPERATORS.length-1]} className="disabled:opacity-50" onClick={() => changeOperator('right')}><FontAwesomeIcon className="text-black text-left text-xl font-bold" icon={faChevronRight}/></button>
              </div>
            </div>
          </div>  
        </div>  
        <div className="hidden md:block justify-center self-center">
          <div className="ml-10 flex items-baseline space-x-4">
            <p>
              <Link to={`/${operator}/futbol/seriaa`} className={`pr-2 ${sport==='futbol'?'text-teal-500':''}`}><FontAwesomeIcon icon={faFutbol}/>Futbol</Link>
            </p>

            <p className="text-black hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">
              <Link to={`/${operator}/basketball/basketa`} className={`pr-2 ${sport==='basketball'?'text-teal-500':''}`}><FontAwesomeIcon icon={faBasketball} className="pr-2"/>Basketball</Link>
            </p>

            <p className="text-black hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">
              <Link to={`/${operator}/tennis/test`} className={`pr-2 ${sport==='tennis'?'text-teal-500':''}`}><FontAwesomeIcon icon={faTableTennisPaddleBall} className="pr-2"/>Tennis</Link>
            </p>
            <p className="text-black hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">
              <Link to={`/${operator}/boxing/test`} className={`pr-2 ${sport==='boxing'?'text-teal-500':''}`}><FontAwesomeIcon icon={faMitten} className="pr-2"/>Boxing</Link>
            </p>
          </div>
        </div>  
        <div className="flex items-center justify-between w-1/4"> 
        </div>
      </nav>
  );
}

export default Nav;
