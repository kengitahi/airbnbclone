import React from "react";
import star from "../assets/images/star.png";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card__badge">{badgeText}</div>}
            {/* Image folder has to be in the same folder as index.html */}
            <img src={`../img/${props.coverImg}`} alt="experience" className="card__image" />
            <div className="card__stats">
                <img src={star} alt="star" className="card__stats--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray"> {props.location}</span>
            </div>
            <h2 className="card__text">{props.title}</h2>
            <p className="card__text">{props.description}</p>
            <p className="card__text">
                <span className="bold">From ${props.price}</span> /person
            </p>
        </div>
    )
}