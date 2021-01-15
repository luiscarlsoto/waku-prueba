import React, { useState, useEffect } from 'react';
import {GameCard} from '../gameCard/GameCard'
import { useLocation } from 'react-router'
import './List.css'
import { getGames, getDeals } from '../../services/games'
import {Loading} from '../../assets/spinner'
const List = () => {
  const steamURL = process.env.REACT_APP_URL_STEAM || "https://store.steampowered.com/app"
  const location = useLocation()
  const listGames = location.pathname.includes('games')
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("");
    const [data, setData] = useState([{}]);


    const getData = async () =>{
      try{
        setLoading(true)
        let response;
        if(listGames) response =  await getGames()
        else response = await getDeals()
        setData(response.filter(e => !!e.steamAppID))
      } catch(error) {
        console.error(error)
      }
        finally{
          setLoading(false);
        }
    }    
    useEffect(() => {
      
      getData()
      }, []);

      const handlerSortDeals = (opc) => {
        const aux = [...data]
        console.log(opc)
        switch (opc) {
          case "0":
            console.log(opc)
            setData(aux.sort((a,b) => a.title > b.title ? 1 : -1))
            break;
          case "1":
            console.log(opc)
            setData(aux.sort((a,b) => a.salePrice > b.salePrice ? 1 : -1))
            break;
          case "2":
            console.log(opc)
            setData(aux.sort((a,b) => a.savings < b.savings ? 1 : -1))
            break;                
          default:
            break;
        }
      }

      const handlerSortGames = (opc) => {
        const aux = [...data]
        console.log(opc)
        switch (opc) {
          case "0":
            console.log(opc)
            setData(aux.sort((a,b) => a.external > b.external ? 1 : -1))
            break;
          case "1":
            console.log(opc)
            setData(aux.sort((a,b) => a.cheapest > b.cheapest ? 1 : -1))
            break;
          default:
            break;
        }
      }


    return (
          <>
           <div className="search-opc">
            <input placeholder="Search here..." onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} type="text" />
            <select onChange={(e) => listGames ? handlerSortGames(e.target.value) : handlerSortDeals(e.target.value)}>
              <option value="" selected disable hidden>Order by</option>
              <option value="0">Title</option>
              <option value="1">Price</option> 
              {!listGames && <option value="2">Saving</option>}
            </select>
          </div> 
            <div className="container">
             {loading && <Loading/> }
                {!search.length & data ==! undefined ?
                  data.map((item) => (
                    <GameCard {...item} listGames={listGames} url={`${steamURL}/${item.steamAppID}`}
                    picture={`https://steamcdn-a.akamaihd.net/steam/apps/${item.steamAppID}/header.jpg`}/>
                    )): 
                      data.filter(e => e.external?.toLowerCase().includes(search) || e.title?.includes(search)).map((item) => (
                      <GameCard {...item} listGames={listGames} url={`${steamURL}/${item.steamAppID}`}
                      picture={`https://steamcdn-a.akamaihd.net/steam/apps/${item.steamAppID}/header.jpg`}/>
                      ))
                  }
              </div>
            </>
    )
}

export default List
