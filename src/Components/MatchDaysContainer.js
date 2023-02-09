import React from "react";
import { v4 as uuidv4 } from 'uuid';
import MatchContainer from './MatchContainer';
const MatchDaysContainer = ({operator, sport, country, league, leagueData}) => {
    const leagueDataKeys = Object.keys(leagueData);
    return (
        <div className="text-lg font-bold">
            <h1 className="bg-slate-100 pl-5 py-5 font-bold text-xl">
                Upcoming Events:
            </h1>
                 {/* {dow}, {dd}.{parseInt(mm)<10?`0${mm}`:mm}.{yy}{daysFromToday===0?'(Today)':''}  */}
            <div>
                <div>
                    {leagueDataKeys.length === 0 ? 'No matches this day' : leagueDataKeys.map(
                        (leagueDataKay) => (
                            <div key={leagueDataKay}>
                                <MatchContainer operator={operator} match={leagueData[leagueDataKay]} datetime={leagueData[leagueDataKay]} name={leagueDataKay} sport={sport}/>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default MatchDaysContainer;