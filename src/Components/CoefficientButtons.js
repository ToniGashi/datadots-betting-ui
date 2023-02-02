import React from "react"
import { v4 as uuidv4 } from 'uuid';

const CoefficientButtons = ({bets}) => {
    let betKeys = Object.keys(bets);

    if(betKeys[2] === 'X' && betKeys[1]==='2') { //Temporary solution for reordering 12x -> 1x2
        const temp = betKeys[2]
        betKeys[2] = betKeys[1];
        betKeys[1] = temp;
    } 

    return (
        <div className="flex flex-col gap-y-2">
            {betKeys.map((bet, i) => {
                return (
                    <div key={uuidv4()} className="flex flex-col flex-col-gap gap-y-2">
                        <button className="bg-[#cefbfe] hover:bg-[#a8f9ff] hover:border font-bold text-[#4c4f4f] px-3 py-2 rounded w-60">
                            <div className="flex justify-between">
                                <h1 className="text-xs self-center">{bet}</h1>
                                <h1>{parseFloat(bets[bet]).toFixed(2)}</h1>
                            </div>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default CoefficientButtons