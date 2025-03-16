import './Workshop.css';

function Workshop({title, content, img}) {
    return (
        <div className="workshopCard card">
            <p className ="h3">{title}</p>
            <div className="workshopContent">
                <p className="h4">{content}</p>
                <img className="workshopImg" src={img}></img>
            </div>
        </div>
    );
}

export default Workshop;
