import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


function App() {
  const frases = ["La vida es lo que ocurre mientras estás ocupado haciendo otros planes.","La única manera de hacer un gran trabajo es amar lo que haces.","La educación es el arma más poderosa que puedes usar para cambiar el mundo.","No hay camino para la paz, la paz es el camino.","No juzgues cada día por lo que cosechas, sino por las semillas que siembras.","La mente es como un paracaídas, solo funciona cuando se abre.","El único modo de hacer un gran trabajo es amar lo que haces.","El éxito es la suma de pequeños esfuerzos, repetidos día tras día.","La felicidad no es algo que pospones para el futuro; es algo que diseñas para el presente.","La imaginación es más importante que el conocimiento.","Lo que se obtiene con violencia, solamente se puede mantener con violencia.","Si buscas resultados distintos, no hagas siempre lo mismo.","Nunca es tarde para ser lo que podrías haber sido.","La libertad no es nada más que una oportunidad para ser mejor.","La única forma de hacer un gran trabajo es amar lo que haces.","La vida es 10% lo que me pasa y 90% cómo reacciono a ello.","No hay viento favorable para el que no sabe dónde va.","Si puedes soñarlo, puedes lograrlo.","No hay camino para la verdad, la verdad es el camino.","No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes al no intentarlo.","La perfección no es alcanzable, pero si persigues la perfección, puedes alcanzar la excelencia.","La mayor gloria no es nunca caer, sino levantarse siempre.","La única manera de hacer un trabajo excelente es amar lo que haces.","La verdadera grandeza radica en ser grande en cosas pequeñas.","Lo importante es no dejar de hacerse preguntas.","La única cosa peor que estar ciego es tener la vista pero no tener visión.","La única forma de hacer un trabajo excelente es amar lo que haces.","Nunca te rindas, porque nunca sabes si el próximo intento será el que funcionará.","La mejor manera de predecir el futuro es inventarlo.","La grandeza no consiste en nunca caer, sino en levantarse cada vez que caes."];
  const autores = ["John Lennon","Steve Jobs","Nelson Mandela","Mahatma Gandhi","Robert Louis Stevenson","Albert Einstein","Steve Jobs","Robert Collier","Jim Rohn","Albert Einstein","Mahatma Gandhi","Albert Einstein","George Eliot","Albert Camus","Steve Jobs","Charles R. Swindoll","Séneca","Walt Disney","Mahatma Gandhi","Jack Canfield","Vince Lombardi","Nelson Mandela","Steve Jobs","Charles Simmons","Albert Einstein","Helen Keller","Steve Jobs","Mary Kay Ash","Alan Kay","Nelson Mandela"];
  const colores = ["#FFCCCC", "#CCFFCC", "#CCCCFF", "#FFFFCC", "#CCFFFF", "#FFCCFF", "#FFCCCC", "#CCFFCC", "#CCCCFF", "#FFFFCC", "#CCFFFF", "#FFCCFF", "#FFCCCC", "#CCFFCC", "#CCCCFF", "#FFFFCC", "#CCFFFF", "#FFCCFF", "#FFCCCC", "#CCFFCC", "#CCCCFF", "#FFFFCC", "#CCFFFF", "#FFCCFF", "#FFCCCC", "#CCFFCC", "#CCCCFF", "#FFFFCC", "#CCFFFF", "#FFCCFF"];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const generateRandomIndex = () => {
    let newIndex = currentIndex;
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * frases.length);
    }
    return newIndex;
  };

  const handleClick = () => {
    const newIndex = generateRandomIndex();
    setCurrentIndex(newIndex);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 80);
  };

  const bodyStyle = {
    backgroundColor: colores[currentIndex],
    width: '100%',
    height: '100vh',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  
  const quoteBoxStyle = {
    borderRadius: '1%',
    width: '500px',
    height: '300px',
    backgroundColor: 'white',
    padding: '20px 40px',
    position: 'absolute',
    transition: 'transform 50ms ease-in',
    transform: animate ? 'scale(1.2)' : 'scale(1)'
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + frases[currentIndex] + '" - ' + autores[currentIndex])}`;

  return (
    <div style={bodyStyle}>
      <div id="quote-box" style={quoteBoxStyle}>
        <p id="text" style={{ fontFamily: 'Raleway,sans-serif', fontSize: '25px', color: 'black' }}>
          "{frases[currentIndex]}"
        </p>
        <p id="author" style={{ position: "absolute", top: "180px", left: "420px" }}>
          -{autores[currentIndex]}-
        </p>
        <button id="new-quote" onClick={handleClick} style={{ position: "absolute", top: "260px", left: "450px", backgroundColor: colores[currentIndex], width: "100px", height: "50px", borderRadius: '5%', border: 'none', color: 'white' }}>
          New Quote
        </button>
        <a id="tweet-quote" target="_blank" href={twitterUrl}>
          <FontAwesomeIcon icon={faTwitter} style={{ position: "absolute", top: "260px", left: "50px", cursor: "pointer", width: "50px", height: "30px", backgroundColor: '#eef', borderRadius: '5%', padding: '10px', color: '#08a0e9' }} />
        </a>
      </div>
    </div>
  );
}

export default App;
