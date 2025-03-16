import './Card.css';

function QuestionAnswer({question, answer}) {
    return (
        <div className="card">
            <p className="text cardText">
                {question}
            </p>
            <p className="text cardText">
                {answer}
            </p>
        </div>
    );
}

export default QuestionAnswer;
