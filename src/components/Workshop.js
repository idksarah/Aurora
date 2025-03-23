import './Workshop.css';

function Workshop({title, content, img}) {
    return (
        <div className="workshopCard card">
            <p className ="h3 accent text workshopContent">{title}</p>
            <div className="p2 workshopContent">
                <p className="h4 p2 text">{content}</p>
                <img className="workshopImg" src={img}></img>
            </div>
        </div>
    );
}

export default Workshop;
