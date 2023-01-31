import axios from '../axios/axios'

const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const getOperators = async () => {
    const resp = await axios.get('/operators');
    return resp.data;
}

export const getSidebar = async() => {
    const resp = await axios.get('/sidebar')
    return resp.data;
}

export const countryLogoDictionary = {
    'USA' : 'US',
    'England' : 'GB',
    'Germany' : 'DE',
    'Frace' : 'FR',
    'Italy' : 'IT',
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

export const dayInfo = (daysFromToday) => {
    const TODAY = new Date()
    TODAY.setDate(TODAY.getDate() + daysFromToday);
    
    var dd = String(TODAY.getDate()).padStart(2, '0');
    var mm = String(TODAY.getMonth() + 1); //January is 0 should be 1!
    var yy = String(TODAY.getFullYear()).substring(2,4);
    var dow = WEEKDAY[TODAY.getDay()] //Day of week

    return [dd, mm, yy, dow]
}

