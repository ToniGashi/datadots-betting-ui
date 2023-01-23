
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEarthAmericas, faEarthEurope, faMagnifyingGlass, faPaperPlane, faFutbol, faBasketball } from '@fortawesome/free-solid-svg-icons'
const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const OPERATORS = ['operator1', 'Noizy', 'MASTERBET', 'TONIBET', 'TOSINO'];

export const daysWithMatches = {
    operator1: {
        futbol : {
            premierleague: [
                [//day1 coefficients have this format: winbets: winBets[homeTeamWin, draw, guestTeamWin], overUnderBets:[over2.5,under2.5], bothScoreBets:[yes, no]
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day2
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day3
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day4
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day5
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day6
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Man utd', guest:'Man City', time:'22:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                []//day7
            ],
            seriaa: [
                [//day1 coefficients have this format: winbets: winBets[homeTeamWin, draw, guestTeamWin], overUnderBets:[over2.5,under2.5], bothScoreBets:[yes, no]
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day2
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day3
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day4
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day5
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day6
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Milan', guest:'Juventus', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                []//day7
            ],
            laliga: [
                [//day1 coefficients have this format: winbets: winBets[homeTeamWin, draw, guestTeamWin], overUnderBets:[over2.5,under2.5], bothScoreBets:[yes, no]
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day2
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day3
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day4
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day5
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                [//day6
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                    {home:'Barcelona', guest:'Real Madrid', time:'23:00', coefficients:{winBets:[2.33, 3.11, 2.11], overUnderBets:[2.33, 3.11], bothScoreBets:[2.33, 3.11], doubleChanceBets:[2.33, 3.11, 2.11]}},
                ],
                []//day7
            ]
        }
    }
}

export const SIDEBAR_TEXT_FIX = {
    popularLeagues: 'Popular Leagues',
    world: 'World',
    europe: 'Europe',
    otherLeagues: 'Other Leagues',
    seriaa: 'Seria A',
    laliga: 'La Liga',
    premierleague: 'Premier League',
    bundesliga: 'Bundesliga',
    basketPopularLeagues: 'Basketball Popular Leagues',
    basketWorld: 'Basketball World',
    basketEurope: 'Basketball Europe',
    otherBasketLeagues: 'Other Leagues'
}

export const SIDEBAR_ICONS = {
    subIcons: {
        popularLeagues:<FontAwesomeIcon icon={faStar}/>,
        world: <FontAwesomeIcon icon={faEarthAmericas}/>,
        europe: <FontAwesomeIcon icon={faEarthEurope}/>,
        otherLeagues: <FontAwesomeIcon icon={faMagnifyingGlass}/>,
        example: <FontAwesomeIcon icon={faPaperPlane}/>
    },
    mainIcons: {
        futbol: <FontAwesomeIcon icon={faFutbol}/>,
        basketball: <FontAwesomeIcon icon={faBasketball}/>,
    },
}

export const SIDEBAR = {
    futbol: {
        popularLeagues: ['seriaa', 'laliga', 'premierleague', 'bundesliga'],
        world: ['test'],
        europe: ['test'],
        otherLeagues: ['test'],
    },
    basketball: {
        basketPopularLeagues: ['basketa', 'labasket', 'premierbasket', 'bundesbasket'],
        basketWorld: ['test'],
        basketEurope: ['test'],
        otherBasketLeagues: ['test'],
    }
}

export const dayInfo = (daysFromToday) => {
    const TODAY = new Date()
    TODAY.setDate(TODAY.getDate() + daysFromToday);
    
    var dd = String(TODAY.getDate()).padStart(2, '0');
    var mm = String(TODAY.getMonth() + 1); //January is 0 should be 1!
    var yy = String(TODAY.getFullYear()).substring(2,4);
    var dow = WEEKDAY[TODAY.getDay()] //Day of week

    return [dd, mm, yy, dow]
}

