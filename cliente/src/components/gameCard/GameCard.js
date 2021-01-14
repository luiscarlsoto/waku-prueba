import React from 'react'
import './GameCard.css'
export const GameCard = (props) => {

    const gamesContent = (<>
        <div className="card-title">{props.external}</div>
        <div className="card-price">{`$ ${props.cheapest}`}</div>
        </>)

    const dealsContent = (<>
    <div className="card-title">{props.title}</div>
    <div className="card-saving"><span>{`-${parseInt(props.savings)}%`}</span></div>
    <div className="card-prices"> 
        <div className="card-old-price">{`$ ${props.normalPrice }`}</div>
        <div className="card-price">{`$ ${props.salePrice}`}</div>
    </div></>)    
    
    return (
        
        <div className="card" onClick={() => window.open(props.url,"_blank")} style={{backgroundImage:`url(${props.picture})` }}>
            <div className="card-header">
                <div className="card-img" />
            </div>
            <div className="card-body">
                {props.listGames ? gamesContent : dealsContent}
            </div>
        </div>
    )
}
