import React, {useState, useEffect} from "react";

function ApiTest2() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost/project/php/demo2.php")
        .then((response) => response.json())
        .then ((data) => {
            console.log(data);
            setData(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    
    return (
        <div>
            <form action=""></form>
        </div>);
}

export default ApiTest2;