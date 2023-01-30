import React from "react"
import { v4 as uuidv4 } from 'uuid';
import CoefficientButtons from "./CoefficientButtons";
import MatchContainer from './MatchContainer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock } from '@fortawesome/free-solid-svg-icons'
import { dayInfo } from "./database/data";

const MatchDaysContainer = ({leagueData}) => {
    let leagueDataKeys = Object.keys(leagueData);

    // const [dd, mm, yy, dow] = dayInfo(daysFromToday)

    return (
        <div>
            <div className="bg-slate-100 text-lg font-bold">
                {/* {dow}, {dd}.{parseInt(mm)<10?`0${mm}`:mm}.{yy}{daysFromToday===0?'(Today)':''}  */}
            </div>
            <div>
                <div>
                    {leagueDataKeys.length === 0 ? 'No matches this day' : leagueDataKeys.map(
                        (key) => (
                            <div key={uuidv4()} className="mb-10">
                                <MatchContainer match={leagueData[key]} name={key}/>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
        
    )
}

export default MatchDaysContainer;