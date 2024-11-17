import React, { useState, useEffect } from "react";
import './delete.css';

function Deleteques(props) {
    const [questions, setQuestions] = useState([]);
    const [selectedQues, setSelectedQues] = useState(new Set());
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        //console.log(props.subject);
        fetch("http://localhost/api/api/fetchQues.php",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ subject: props.subject.toLowerCase(), username: props.username }),
            })
            .then((response) => response.json())
            .then((data) => {
                // console.log("Fetched data:", data);
                setQuestions(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [refresh]);

    const handleCheckboxChange = (quesid) => {
        setSelectedQues((prevSelected) => {
            const updatedSelected = new Set(prevSelected);
            if (updatedSelected.has(quesid)) {
                updatedSelected.delete(quesid);
            } else {
                updatedSelected.add(quesid);
            }
            //console.log(updatedSelected);
            return updatedSelected;
        });
    };

    const handleDelete = () => {
        fetch("http://localhost/api/api/deleteQues.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ids: Array.from(selectedQues) }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Selected records deleted successfully");
                    setSelectedQues(new Set());
                    setRefresh((prev) => !prev);
                } else {
                    alert("Error deleting records");
                }
            })
            .catch((error) => console.error("Error deleting data:", error));
    };

    return (
        <div className="content">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleDelete();
                }}
            >
                {questions.map((question) => (
                    <div className="item" key={question.id}>
                        <input
                            type="checkbox"
                            id={question.id}
                            onChange={() => handleCheckboxChange(question.id)}
                        />
                        <label htmlFor={question.id}>
                            <div className="ques-item">
                            Question:<p className="ques">{question.ques}</p>
                                a: {question.option_a}<br/>
                                b: {question.option_b}<br/>
                                c: {question.option_c}<br/>
                                d: {question.option_d}<br/>
                                <p className="ans">Answer:{question.answer}</p>
                            </div> <br />
                        </label>
                    </div>
                ))}
                <div>
                    <button id="confirm" type="submit">
                        Confirm Deletion
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Deleteques;
