import './App.css';
import Main from './Main';



function App() {

// BACKGROUN ANIMADO

  const colors = [
    '#ffffff41',
  ]
  function createSquare(){
    const section = document.querySelector('section');
    const square = document.createElement('span');

    var size = Math.random() * 100;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * window.innerHeight + 'px';
    square.style.left = Math.random() * window.innerWidth + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)]
    square.style.background = bg;

    section.appendChild(square);

    setTimeout(() => {
      square.remove();
    }, 5000)

  };
  setInterval(createSquare, 150)

  return (
    <div className="App">
      <Main/>
      <section></section>
    </div>
  );
}

export default App;
