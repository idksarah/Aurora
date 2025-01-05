import './Card.css';

function Card({ content }) {
    return (
        <div className="card">
            <p className="text cardText" dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
    );
}

export default Card;
