import './Card.css';

function Card({content}){
    return(
        <div className="card">
            <p className="text">{content}</p>
        </div>
    )
}

export default Card;