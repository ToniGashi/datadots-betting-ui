import React from "react"

const CoefficientButtons = ({bets}) => {
    let betKeys = Object.keys(bets);
    return (
        <div className="flex flex-col gap-y-2">
            {betKeys.map((bet, i) => {
                return (
                    <div key={bets[bet].id} className="flex flex-col flex-col-gap gap-y-2">
                        <button className="bg-[#cefbfe] hover:bg-[#a8f9ff] hover:border font-bold text-[#4c4f4f] px-3 py-2 rounded w-60">
                            <div className="flex justify-between">
                                <h1 className="text-xs self-center">{bets[bet].odds}</h1>
                                <h1>{bet}</h1>
                            </div>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default CoefficientButtons