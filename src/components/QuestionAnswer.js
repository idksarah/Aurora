import './Card.css';

function QuestionAnswer({question, answer}) {
    return (
        <div className="card QA">
            <p className="p2 text question cardText">
                {question}
            </p>
            <p className="p2 text answer cardText">
                {answer}
            </p>
        </div>
    );
}

export default QuestionAnswer;
