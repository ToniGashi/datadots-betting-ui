import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import MatchContainer from './MatchContainer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock } from '@fortawesome/free-solid-svg-icons'
// import { dayInfo } from "./database/data";
// import { Circles } from  'react-loader-spinner'
// (loading ? 
// <Circles
//     height="80"
//     width="80" /> :
// <div>

const MatchDaysContainer = ({operator, sport, country, league, leagueData}) => {
    const leagueDataKeys = Object.keys(leagueData);
    return (
        <div className="text-lg font-bold">
                {/* {dow}, {dd}.{parseInt(mm)<10?`0${mm}`:mm}.{yy}{daysFromToday===0?'(Today)':''}  */}
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