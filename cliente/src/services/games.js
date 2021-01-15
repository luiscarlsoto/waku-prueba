import axios from 'axios'

const server = process.env.REACT_APP_URL_SERVER || 'http://localhost:4000';
export const getGames = async() =>{
    const response = await axios.get(`${server}/games/list`, {headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }})
    console.log(response.data.data)
    return response.data.data

  }
export const getDeals = async() =>{
    const response = await axios.get(`${server}/games/deals`, {headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}})
    return response.data.data 
}