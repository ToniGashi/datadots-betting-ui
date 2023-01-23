import React from "react";
import { useLocation } from "react-router-dom";
import MatchDaysContainer from "./MatchDaysContainer"
import {daysWithMatches, SIDEBAR_TEXT_FIX} from "./database/data"

const totalMatches = (arr) => {
    if(arr === undefined) return 0;
    
    let counter = 0;

    arr.forEach((day) => {
        if(day.length)
            counter += day.length;
    })
    return counter;
}
// Assume that the first match is the earliest match and everything inside the first array is today, and every array after that are diffrent days
// The league was specified in the request
const MainContainer = () => {
    const [_, operator, sport, league] = useLocation().pathname.split('/'); //1 is the sport type and 2 is the league
    
    return (
        <div className="w-full">
            {daysWithMatches[operator]===undefined || daysWithMatches[operator][sport]===undefined || daysWithMatches[operator][sport][league] === undefined ? 
            <h1 className="text-2xl text-center font-bold text-gray-900 ml-2">No data found for {SIDEBAR_TEXT_FIX[league] ? SIDEBAR_TEXT_FIX[league] : league} for the next 7 days</h1> : 
            <div>
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold text-gray-900 ml-2">{SIDEBAR_TEXT_FIX[league] ? SIDEBAR_TEXT_FIX[league] : league}</h1>
                    <h4 className="text-2xl text-gray-900 mr-2">{totalMatches(daysWithMatches[operator][sport][league])} matches in the next {daysWithMatches[operator][sport][league].length} days</h4>
                </div>
                {daysWithMatches[operator][sport][league].map((day, i) => (
                    <div className="border-2 w-full block" key={i}> 
                    {/* Each day is different, adding, editing and deleting will not be allowed and therefore each day will have a different i */}
                        <MatchDaysContainer dayMatches={day} daysFromToday={i}/>
                    </div>
                ))}
            </div>
            }
        </div>
    )
}

export default MainContainer;
