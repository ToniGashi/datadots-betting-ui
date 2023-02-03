import React from "react"
import { v4 as uuidv4 } from 'uuid';

const CoefficientButtons = ({operator, bets}) => {
    let betKeys = Object.keys(bets);

    if(betKeys[2] === 'X' && betKeys[1]==='2') { //Temporary solution for reordering 12x -> 1x2
        const temp = betKeys[2]
        betKeys[2] = betKeys[1];
        betKeys[1] = temp;
    } 

    return (
        <div className="flex flex-col gap-y-2 ">
            {betKeys.map((bet, i) => {
                return (
                    <div key={uuidv4()} className="flex flex-col flex-col-gap gap-y-2">
                        <button className={  //Operators need to be known beforehand with this implementation
                            operator==='operator1'?`bg-[#C2F9D2] hover:bg-[#8ff7ad] hover:border font-bold text-[#4c4f4f] px-3 py-2 rounded w-60`: 
                            operator==='operator2' ? `bg-[#fff1f1] hover:bg-[#ffb6b6] hover:border font-bold text-[#4c4f4f] px-3 py-2 rounded w-60`: 
                            `bg-[#F1FEFF] hover:bg-[#a8f9ff] hover:border font-bold text-[#4c4f4f] px-3 py-2 rounded w-60`
                        }>
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