import axios from 'axios'
import {Game} from '../models/Game';
import {Deal} from '../models/Deal';

 
export const list =  async() => {
    const res = await Game.find({})
    return  res
};

export const deals = async() => {
    const res = await Deal.find({})
    return  res
};


export const loadDB = async () => {
    const games = await axios.get < GameInterface[] > ('https://www.cheapshark.com/api/1.0/games?title=a&limit=20&exact=0')
    const deals = await axios.get < DealsInterface[] > ('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
    for (const value of games.data.filter( e =>  e.steamAppID !== null)) {
        Game.findOneAndUpdate({
            steamAppID: value.steamAppID
        }, value, {
            upsert: true,
            setDefaultsOnInsert: true,
        },(err) => {
            err !== null && console.log(err)
        })
    }
    for (const value of deals.data.filter( e =>  e.steamAppID !== null)) {
      //  console.log(value)
        Deal.findOneAndUpdate({
            steamAppID: value.steamAppID
        }, value, {
            upsert: true,
            setDefaultsOnInsert: true,
        },(err, doc) => {
            //console.log(doc)
            err !== null && console.log(err)
        })
    }
}


interface DealsInterface {
    steamAppID: string;
    title: string;
    salePrice: number;
    normalPrice: number;
    savings : number;
    releaseDate : number;
    image: number;
}
interface GameInterface {
    steamAppID: string;
    title: string;
    price: number;
    image: string;
    url: string;
}