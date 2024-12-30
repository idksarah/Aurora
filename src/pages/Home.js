import './Home.css';
import TopBar from '../components/TopBar';
import Question from '../components/Question';
import Card from '../components/Card';
import Faq from '../components/Card';

function Home(){
    return(
        <>
            <div className="content">
                <div className="left">
                    <div className="firstCard">
                        <Card content={"ready for some thing in sf!!!!?????! (shift + scroll wheel)"}></Card>
                    </div>
                    <div className="secondCard">
                        <Card content={"gonna be sooooo cool"}/>
                    </div>
                </div>
                <div className="right">
                    <div className="logo">
                        <p className="text">Aurora</p>
                        <p className="text">gonna add logo instead of text later</p>
                        <p className="text">date</p>
                    </div>
                    <div className="The Mission">
                        <p  className="text">empowering women and stuff wyayayaya i love women</p>
                    </div>
                    <div className="Faq">
                        <Faq/>
                    </div>
                    <div className="Sponsors">
                    </div>
                    <div className="Register">
                        <p className="text">Ready to start? Register here!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;