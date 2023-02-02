import React from "react";
import MatchDaysContainer from "./MatchDaysContainer"
import {SIDEBAR_TEXT_FIX} from "./database/data"

// Assume that the first match is the earliest match and everything inside the first array is today, and every array after that are diffrent days
// The league was specified in the requestS
const MainContainer = ({operator, sport, country, league, leagueData}) => {
    const leagueDatalength = Object.keys(leagueData).length;
    const NUMBER_OF_DAYS = 7;

    return (
        <div className="w-screen">
            {leagueDatalength === 0 ? <h1 className="text-2xl text-center font-bold text-gray-900 ml-2">No data found for {SIDEBAR_TEXT_FIX[league] ? SIDEBAR_TEXT_FIX[league] : league} for the next 7 days</h1> 
            : 
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={`/logos/${sport.replace(' ', '').toLowerCase()}.png`} className="my-4 mx-4" width="50" height="20" alt='flag' 
                            onError={({currentTarget}) => {
                                currentTarget.onerror = null; 
                                currentTarget.src=`/logos/${sport}.png`
                            }}
                        />
                        <h1 className="text-2xl font-bold text-gray-900 ml-2">
                            {SIDEBAR_TEXT_FIX[league] ? SIDEBAR_TEXT_FIX[league] : league.replace('%20', ' ')}
                        </h1>
                    </div>
                    <h4 className="text-2xl text-gray-900 mr-2">{leagueDatalength} matches in the next {NUMBER_OF_DAYS} days</h4>
                </div>
                <div className="border-2 w-full block" > 
                    <MatchDaysContainer leagueData={leagueData} operator={operator} sport={sport} country={country} league={league}/>
                </div>
            </div>}
        </div>
    )
}

export default MainContainer;
