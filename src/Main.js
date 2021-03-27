import './main.css'
import React from 'react';

function Main() {
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
                <img src="..." alt="..." className="main__img"></img>
                <div>
                    <h5>Card title</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="main__button">Go somewhere</button>
                </div>
            </section>

            
        </div>
    )
}

export default Main
