import './main.css'
import React, { useEffect, useState } from "react";



function Main() {
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
                <h1>
                    <span>N</span>
                    <span>u</span>
                    <span>t</span>
                    <span>r</span>
                    <span>i</span>
                    <span>a</span>
                    <span>l</span>
                    <span>u</span>
                    <span>s</span>
                </h1>
            </header>

            <section className="main__section">
                <img src={response.image} alt="..." className="main__img"></img>
                <div>
                    <h5>Nombre: {response.name}</h5>
                    <h5>Email: {response.email}</h5>
                    <h5>Telefono: {response.phone}</h5>
                    <a href="http://localhost:3000/" >
                    <button className="main__button">Siguiente busqueda</button>
                    </a>
                </div>
            </section>

            
        </div>

      );
    }
  }
    
    


export default Main
