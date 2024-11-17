import React, {useState, useEffect} from "react";

function ApiTest() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost/api/apitest.php")
        .then((response) => response.json())
        .then((data) => {console.log(data); 
          setData(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    return (
      <div>
        {data ? (
          <div>
            <h1>{data.name}</h1>
            <p>Price: ${data.price}</p>
            <p>{data.toString()}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  
  export default ApiTest;