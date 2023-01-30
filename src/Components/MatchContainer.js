import { v4 as uuidv4 } from 'uuid';
import CoefficientButtons from "./CoefficientButtons";

const MatchContainer = ({match, name}) => {
    const matchKeys = Object.keys(match);
    let isInitialized = false;
    const [home, away] = name.split(' vs ')
    const DESIRED_BETS = ['FT 1X2','Over','Odd-Even Goals','Double Chance','Both Teams To Score', '2Way', 'Under-Over']
    return (
        <div className="flex justify-around" key={uuidv4()}>
        <div className="px-3 content-center self-center">
            {/* <div className="flex text-[#9ca3af]">
                <p className="">{matchInfo.time}</p>
            </div> */}
            <h1>{home}</h1>
            <h1>{away}</h1>
        </div>
        <div className='flex max-w-screen-xl gap-3 pb-2'>
            {matchKeys.map(key => (   
                DESIRED_BETS.includes(key) &&
                <div key={uuidv4()}>
                    {!isInitialized && <h1 className="mb-2 text-center font-semibold">{key}</h1>} 
                    <CoefficientButtons bets={match[key]}/>
                </div>
            ))}
            {isInitialized=true}
        </div>
        {/* <div>
            
            <CoefficientButtons bets={matchInfo.coefficients.winBets} keyWords={[home, 'Draw', away]}/>
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
            <CoefficientButtons bets={matchInfo.coefficients.doubleChanceBets} keyWords={[`${home} or draw`, `${home} or ${away}`, `${away} or draw`]} />
        </div> */}
    </div>
    )
}

export default MatchContainer;