import './Card.css';

function Card({name, img }) {
    return (
        <div className="card">
            <img className="img" src={img}></img>
            <p className="text eventName">{name}</p>
        </div>
    );
}

export function PastEventCard({name, img }) {
    return (
        <div className="card pastEventCard">
            <img className="img" src={img}></img>
            <p className="text eventName">{name}</p>
        </div>
    );
}

export default Card;
