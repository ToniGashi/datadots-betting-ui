import { v4 as uuidv4 } from 'uuid';
import CoefficientButtons from "./CoefficientButtons";

const MatchContainer = ({operator, match, name, sport}) => {
    const DESIRED_BETS = ['FT 1X2', 'Under-Over', 'Both Teams To Score', 'Over', 'Odd-Even Goals', 'Double Chance', '2Way', 'Match Odds 2way']
    const matchKeys = DESIRED_BETS.filter(current => {
        if(match[current]) 
            return current;
    });
    const [home, away] = name.split(' vs ')
    return (
        <div className="flex justify-left" key={uuidv4()}>
            {(home && away) && <div className="mx-8 mt-8 content-center self-center">
                {/* <div className="flex text-[#9ca3af]">
                    <p className="">{match.datetime}</p>
                </div> */}
                <div className='flex mb-5 w-60'> {/*Lower this to bring coeficients closer */}
                    <img src={`/logos/${home.replace(' ', '').toLowerCase()}.jpg`} width="30" height="20" className='mr-2 h-10 w-10 self-center' alt='flag' 
                        onError={({currentTarget}) => {
                            currentTarget.onerror = null; 
                            currentTarget.src=`/logos/${sport.replace(' ', '').toLowerCase()}.jpg`
                        }} />
                    <h1 className='self-center'>{home}</h1>
                </div>
                <div className='flex mb-5 w-60'>
                    <img src={`/logos/${away.replace(' ', '').toLowerCase()}.jpg`} width="30" height="20" className='mr-2 h-10 w-10 self-center' alt='flag'
                        onError={({currentTarget}) => {
                            currentTarget.onerror = null; 
                            currentTarget.src=`/logos/${sport.replace(' ', '').toLowerCase()}.jpg`
                            }}/>
                    <h1 className='self-center'>{away}</h1>
                </div>
            </div>}
            <div className='flex max-w-screen-xl gap-3 pb-2'>
                {matchKeys.map(key => (
                    DESIRED_BETS.includes(key) &&
                    <div key={uuidv4()}>
                        <h1 className="mb-2 text-center font-semibold">{key}</h1>
                        <CoefficientButtons operator={operator} bets={match[key]}/>
                    </div>
                ))}
                
            </div>
    </div>
    )
}

export default MatchContainer;