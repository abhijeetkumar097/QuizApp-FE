import React, {useState, useEffect} from "react";
import './display.css';

function Display(props) {
    const [success, setSuccess] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState(new Map());
    //const [score, setScore] = useState(0);

    //console.log(score);
    useEffect(() => {
        fetch("http://localhost/api/api/test.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({subject : props.subject, username: props.admin}) // pass the subject as a parameter to the API call
        }
        )
       .then((response) => response.json())
       .then((data) => {
            if (data.length === 0) {
                setSuccess(false);
                alert("No Question available");
            }
            else {
                setQuestions(data);
                //console.log(data);
            }
       })}, []);
       
       const choose = (e) => {
        setAnswers((previous) => {
            previous.set(e.target.name, e.target.value);
            return previous;
        });
        
        //console.log(answers);
       };

       const submitQuiz = () => {
        const correctAnswers = questions.filter(question => question.answer === answers.get(question.id));
        //setScore(correctAnswers.length);
        const ans = `${correctAnswers.length}/${questions.length}`;
        
        // Save the score to the database
        fetch("http://localhost/api/api/Answer.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ans : ans, subject : props.subject.toLowerCase(), username: props.username, admin: props.admin}) })
            .then((response) => response.json())
            .then((data) => {
                if(data.success) {
                    alert(`Your test is recorded`);
                }
                else {
                    alert(`Failed to record your test`);
                }
            })
            .catch((error) => console.error("Error deleting data:", error));
            
        };

       return (
        <div className="display">
            {success? <h2>{props.username}</h2> : <p>No data found</p>}
            <h1>Questions</h1>
            <form onSubmit={(e) => {e.preventDefault(); submitQuiz()}}>
            {questions.map((question) => (
                <div key={question.id} className="items">
                    <h2>{question.ques}</h2>
                    <input type="radio"  name= {question.id} value = {question.option_a} onChange={choose}/>{question.option_a}
                    <br/>
                    {/* <label htmlFor={question.option_a}>{question.option_a}</label> */}
                    <input type="radio" name= {question.id} value = {question.option_b} onChange={choose}/>{question.option_b}
                    <br/>
                    {/* <label htmlFor={question.option_b}>{question.option_b}</label> */}
                    <input type="radio" name= {question.id} value = {question.option_c} onChange={choose}/>{question.option_c}
                    <br/>
                    {/* <label htmlFor={question.id}>{question.option_c}</label> */}
                    <input type="radio" name= {question.id} value = {question.option_d} onChange={choose}/>{question.option_d}
                    <br/>
                    {/* <label htmlFor={question.id}>{question.option_d}</label> */}
                </div>
            ))}
            <br/>
            <button type="submit">Submit Quiz</button>
            </form>
        </div>
    );

       
}

export default Display;
