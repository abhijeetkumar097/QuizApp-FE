import React, {useState, useEffect} from "react";
import './AddQues.css';


function AddQues(props) {
    const[question, setQuestion] = useState({
        question: "", 
        option_a: "", 
        option_b: "", 
        option_c: "", 
        option_d:"", 
        answer: "",
        subject: "",
        username: "",
    });

    const submit = () => {
        // Add question to database
        //console.log("inside", props.subject);
        question.subject = props.subject.toLowerCase();
        question.username = props.username;
        fetch('http://localhost/api/api/AddQues.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(question),
        }).then(response => response.json())
        .then((data) => {
            if(data.success) {
                alert(data.message);
                //console.log(data);
            }
            else {
                alert(data.message);
            }
            //console.log(data);
        })
        .catch((error) => console.error("Error adding data:", error));
        
        // Clear form inputs
        setQuestion({
            question: "", 
            option_a: "", 
            option_b: "", 
            option_c: "", 
            option_d:"", 
            answer: "",
            subject: "",
        });
    }
    const handleChange = (e) => {
        setQuestion({...question, [e.target.name]: e.target.value});
    }
    return(
        <>
        <div className="div1">
            <form onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                }} className="Addform" method="post">
                <h3>Question</h3>
                <input type="text" name="question" value={question.question} onChange={handleChange}/>
                <p>option a</p>
                <input type="text" name='option_a' value={question.option_a} onChange={handleChange}/>
                <p>option b</p>
                <input type="text" name='option_b' value={question.option_b} onChange={handleChange}/>
                <p>option c</p>
                <input type="text" name="option_c" value={question.option_c} onChange={handleChange}/>
                <p>option d</p>
                <input type="text" name="option_d" value={question.option_d} onChange={handleChange}/>
                <p>Answer</p>
                <input type="text" name="answer" value={question.answer} onChange={handleChange}/>
                <button type="submit">Add Question</button>
            </form>
        </div>
        </>
    );

    
}

export default AddQues;