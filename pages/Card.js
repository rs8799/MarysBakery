import React from "react"
import Link from "next/link"; 


export default function Card(props) {
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online"){
        badgeText ="ONLINE"
    }

    return (
        <Link href="/Formpage">
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card--photo"/>
            <div className="card--stats">
                <img src="star.png" className="card--star"/>
                <span className="card--rating">{props.item.stats.rating} </span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> </p>
        </div>
        </Link>
    )
}
