import "./App.css";
import { Usuario } from "./componentes/Usuario";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>NUESTRO EQUIPO DE DESARROLLADORES</h1>
        <Usuario
          nombre="Carlos Martinez"
          ciudad="Cali -Colombia"
          texto=" Observador y
        detallista, fue la primera persona en notar que el motor
        analítico servía más que para hacer cálculos, razón por la que digitó un
        algoritmo para calcular los números de Bernoulli usando dicha
        herramienta"
          imagen="mujer"
        />
        <Usuario
          nombre="luciana Bermudez"
          ciudad="Cucuta -Colombia"
          texto=" Observador y
        detallista, fue la primera persona en notar que el motor
        analítico servía más que para hacer cálculos, razón por la que digitó un
        algoritmo para calcular los números de Bernoulli usando dicha
        herramienta"
          imagen="mujer"
        />
        <Usuario
          nombre="Carlos Martinez"
          ciudad="Cali -Colombia"
          texto=" Observador y detallista, fue la primera persona en notar que el motor
        analítico servía más que para hacer cálculos, razón por la que digitó un
        algoritmo para calcular los números de Bernoulli usando dicha
        herramienta"
          imagen="mujer"
        />
      </div>
    </div>
  );
}

export default App;
