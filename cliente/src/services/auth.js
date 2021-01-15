import axios from 'axios'

const server = process.env.REACT_APP_URL_SERVER || 'http://localhost:4000';

export const getUser = async() =>{
    const response = await axios.get(`${server}/user/data`, {headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }})
    return response.data.data[0]

  }