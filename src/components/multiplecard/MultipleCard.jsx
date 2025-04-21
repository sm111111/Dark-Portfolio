import React from "react";
import "./MultipleCard.css";
import { DiAndroid } from "react-icons/di";
import pic1 from "../../assets/img/pic1.png";
import pic2 from "../../assets/img/pic2.png";
import pic3 from "../../assets/img/pic3.png";
import pic4 from "../../assets/img/pic4.png";

const cardData = [
    { id: 1, name: "Fast Learner", image: pic4 },
    { id: 2, name: "Problem-solving", image: pic1 },
    { id: 3, name: "Team collaboration", image: pic2 },
    { id: 4, name: "Adaptability", image: pic3 },
];

const MultipleCard = () => {
    return (
        <div className="multipleCard-container">
            {cardData.map((card) => (
                <div className="inside-multiplecard" key={card.id}>
                    <img src={card.image} alt={card.name} />
                    <div className="name-link">
                        <p>{card.name}</p>
                        <span>
                            <DiAndroid />
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MultipleCard;
