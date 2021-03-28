import './main.css'
import React, { useEffect, useState } from "react";



function Main() {
  function refreshPage() {
    window.location.reload(false);
  }
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [response, setItems] = useState([]);
    
    useEffect(() => {
        fetch("https://0q27loouph.execute-api.us-east-1.amazonaws.com/")
        .then(res => res.json())
        .then((response) => {
          console.log(response)
          setIsLoaded(true);
          setItems(response);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
         }
        )
    }, [])
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="main">

            <header className="main__header">
              <h1>Nutrial<strong>us</strong></h1>
            </header>

            <section className="main__section">
                <img src={response.image} alt="..." className="main__img"></img>
                <div className="main__div">
                    <h4>Nombre:</h4>
                    <p>{response.name}</p>
                    <h4>Email:</h4>
                    <p>{response.email}</p>
                    <h4>Telefono:</h4>
                    <p>{response.phone}</p>
                    <h4>Nutricionista:</h4>
                    <p>{response.nutritionist}</p>
                </div>
                <a href="..." ><button className="main__button" onClick={refreshPage}>Siguiente busqueda</button></a>
            </section>

            
        </div>

      );
    }
  }
    
    


export default Main
