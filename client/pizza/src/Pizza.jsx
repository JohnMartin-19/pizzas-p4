import React,{useEffect} from "react";

function Pizza(){
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/pizza/")
          .then(function(response){response.json()
          .then(function(data) {
              console.log(data);
          });
        })
          .catch(function(error) {
            console.log('Fetch Error:', error);
          });
        },[])
    return(
        <div>Welcome to Pizza Page</div>
    )
}
export default Pizza