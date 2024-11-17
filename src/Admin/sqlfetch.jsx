import React, { useState, useEffect } from "react";
import "./sqlfetch.css";

function SqlFetch(props) {
    const [students, setStudents] = useState([]);
    const [selectedStudents, setSelectedStudents] = useState(new Set());
    const [refresh, setRefresh] = useState(false); // State to trigger refresh
    // const [subject, setSubject] = useState("");

    useEffect(() => {
        fetch("http://localhost/api/api/fetchstudent.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ subject: props.subject.toLowerCase(), username: props.username }), // Pass subject as a parameter to the API call
        })
            .then((response) => response.json())
            .then((data) => {
                //console.log("Fetched data:", data);
                setStudents(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [refresh]); // Re-run effect when refresh changes

    const handleCheckboxChange = (id) => {
        setSelectedStudents((prevSelected) => {
            const updatedSelected = new Set(prevSelected);
            if (updatedSelected.has(id)) {
                updatedSelected.delete(id);
            } else {
                updatedSelected.add(id);
            }
            //console.log(updatedSelected);
            return updatedSelected;
        });
    };

    const handleDelete = () => {
        fetch("http://localhost/api/api/delete_students.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ids : Array.from(selectedStudents) }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Selected records deleted successfully");
                    setSelectedStudents(new Set()); // Clear selected students
                    setRefresh((prev) => !prev); // Toggle refresh to re-fetch data
                } else {
                    alert("Error deleting records");
                }
            })
            .catch((error) => console.error("Error deleting data:", error));
    };

    return (
        <div className="content" method="post">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleDelete();
                }}
            >
                {students.map((student) => (
                    <div key={student.id}>
                        <input
                            type="checkbox"
                            id={student.id}
                            onChange={() => handleCheckboxChange(student.id)}
                        />
                        <div  className="marks-item">
                        <label htmlFor={student.id}>
                            <div>id: {student.username}</div>
                            <div>Score: {student.score}</div>
                        </label>
                        </div>
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

export default SqlFetch;
