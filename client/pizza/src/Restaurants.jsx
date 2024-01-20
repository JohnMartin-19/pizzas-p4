import React,{useEffect} from "react";

function Restaurants(){
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/restaurant/")
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
        <div>Restaurants</div>
    )
}

export default Restaurants