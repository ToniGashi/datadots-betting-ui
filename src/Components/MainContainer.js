import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MatchDaysContainer from "./MatchDaysContainer"
import {getLeagueData, SIDEBAR_TEXT_FIX} from "./database/data"
import {Circles} from 'react-loader-spinner';

// Assume that the first match is the earliest match and everything inside the first array is today, and every array after that are diffrent days
// The league was specified in the request
const MainContainer = () => {
    const [leagueData, setLeagueData] = useState({})
    const [loading, setLoading] = useState(false);
    const location = useLocation().pathname.split('/');
    const NUMBER_OF_DAYS = 7;
    const operator = location[1];
    const sport = location[2];
    const country = location[3];
    const league = location[4];

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {getLeague();setLoading(false);}, 300);
    }, [operator, sport, country, league])

    const getLeague = async() => {
        try {
            const resp = await getLeagueData(operator, sport, country, league);
            setLeagueData(resp);
        } catch (err) {
            console.log('Error getting operator data: ', err.message)
        }
    }

    return (
        (loading ? 
        <Circles
            height="80"
            width="80" /> :
        <div className="w-full">
            {Object.keys(leagueData).length === 0 ? <h1 className="text-2xl text-center font-bold text-gray-900 ml-2">No data found for {SIDEBAR_TEXT_FIX[league] ? SIDEBAR_TEXT_FIX[league] : league} for the next 7 days</h1> 
            : 
            <div>
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold text-gray-900 ml-2">{SIDEBAR_TEXT_FIX[league] ? SIDEBAR_TEXT_FIX[league] : league.replace('%20', ' ')}</h1>
                    <h4 className="text-2xl text-gray-900 mr-2">{Object.keys(leagueData).length} matches in the next {NUMBER_OF_DAYS} days</h4>
                </div>
                <div className="border-2 w-full block" > 
                    <MatchDaysContainer leagueData={leagueData}/>
                </div>
            </div>}
        </div>
        )
    )
}

export default MainContainer;
