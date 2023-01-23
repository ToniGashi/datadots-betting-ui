import React from "react"
import { v4 as uuidv4 } from 'uuid';
import CoefficientButtons from "./CoefficientButtons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { dayInfo } from "./database/data"

const MatchDaysContainer = ({daysFromToday, dayMatches}) => {
    let isInitialized = false;

    const [dd, mm, yy, dow] = dayInfo(daysFromToday)

    return (
        <div>
            <div className="bg-slate-100 text-lg font-bold">
                {dow}, {dd}.{parseInt(mm)<10?`0${mm}`:mm}.{yy}{daysFromToday===0?'(Today)':''} 
            </div>
            <div>
                <div>
                    {dayMatches.length === 0 ? 'No matches this day' : dayMatches.map(
                        (matchInfo) => (
                            <div key={uuidv4()} className="mb-10">
                                <div className="flex justify-around" key={uuidv4()}>
                                    <div className="px-3 content-center self-center">
                                        <div className="flex text-[#9ca3af]">
                                            <FontAwesomeIcon icon={faClock} className="pr-2"/>
                                            <p className="">{matchInfo.time}</p>
                                        </div>
                                        <h1>{matchInfo.home}</h1>
                                        <h1>{matchInfo.guest}</h1>
                                    </div>
                                    <div>
                                        {!isInitialized && <h1 className="mb-2 text-center font-semibold">Win Bets</h1>}
                                        <CoefficientButtons bets={matchInfo.coefficients.winBets} keyWords={[matchInfo.home, 'Draw', matchInfo.guest]}/>
                                    </div>
                                    <div>
                                        {!isInitialized && <h1 className="mb-2 text-center font-semibold">Over Under Bets</h1>}
                                        <CoefficientButtons bets={matchInfo.coefficients.overUnderBets} keyWords={['Under 2.5', 'Over 2.5']}/>
                                    </div>
                                    <div >
                                        {!isInitialized && <h1 className="mb-2 text-center font-semibold">Both Score Bets</h1>}
                                        <CoefficientButtons bets={matchInfo.coefficients.bothScoreBets} keyWords={['Yes', 'No']}/>
                                    </div>
                                    <div >
                                        {!isInitialized && <h1 className="mb-2 text-center font-semibold">Double Chance Bets</h1>}
                                        <CoefficientButtons bets={matchInfo.coefficients.doubleChanceBets} keyWords={[`${matchInfo.home} or draw`, `${matchInfo.home} or ${matchInfo.guest}`, `${matchInfo.guest} or draw`]} />
                                    </div>
                                    {isInitialized=true}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
        
    )
}

export default MatchDaysContainer;