import axios from 'axios'

const server = process.env.REACT_APP_URL_SERVER;
export const getGames = async() =>{
    const response = await axios.get(`${server}/games/list`)
    console.log(response.data.data)
    return response.data.data

  }
export const getDeals = async() =>{
    const response = await axios.get(`${server}/games/deals`)
    return response.data.data
}