import React from 'react'
import {Menu, MenuOption} from '../../components/menu/menu'
import {Route,NavLink,HashRouter } from 'react-router-dom';
import {listDeals} from './content/listDeals'
import {listGames} from './content/listGames'

import './games.css'
export const games = () => {
    return (
        <div>
          <HashRouter>
            <Menu>
               <MenuOption onClick={(console.log(23))} linkto="/games" title="Games"/>
               <MenuOption linkto="deals" title="Deals"/>
            </Menu>
            <div>
                <Route path="/games" component={listGames}/>
                <Route path="/deals" component={listDeals}/>
            </div>
          </HashRouter>
        </div>
    )
}
