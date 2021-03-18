import React from "react";
import "./App.css";

function App() {
  const messages = ["Entrevista", "RE: Invitacion a Japón"];
  return (
    <div className="App">
      <Programmer
        name="Linus"
        lastName="Torvalds"
        age={55}
        language="C"
        insurance={18000}
        position="Programador Senior"
      />
      <Programmer
        name="Eduardo"
        lastName="Mendoza"
        age={18}
        language="JavaScript"
        position="Programador Web Jr."
      />
      <Programmer
        name="Jonathan"
        lastName="Rodriguez"
        age={21}
        language="JavaScript"
        position="Programador Backend Md."
      />
      <MailBox messages={messages} />
      <StatusBar balance={100} />
      <StatusBar balance={-1} />
    </div>
  );
}

function StatusBar(props) {
  return (
    <div>
      <div>Tu cuenta bancaria tiene: {props.balance} pesos</div>
      {/* Si balance es menor que cero imprime el primer mensaje, sino el segundo */}
      {/*Aqui se esta usando un operador TERNARIO donde si balance es TRUE imprimira la primera expresion
      si es FALSE imprimira la segunda expresion*/}
      {props.balance < 0 ? (
        <p style={{ color: "red" }}>URGE su presencia en una sucursal</p>
      ) : (
        <p style={{ color: "green" }}>GRACIAS por ser un buen cliente</p>
      )}
    </div>
  );
}

function Programmer(props) {
  return (
    <ul>
      <li>Nombre(s): {props.name}</li>
      <li>Apellidos: {props.lastName}</li>
      <li>Edad: {props.age} años</li>
      <li>Lenguaje de codificación: {props.language}</li>
      {props.age > 40 && <li>Pensión: {props.insurance} pesos al mes</li>}
      {/* Retirado si es mayor a 50 años, muestra su cargo(position) is es menor */}
      <li>Cargo: {props.age > 50 ? "Retirado" : props.position}</li>
    </ul>
  );
}

function MailBox(props) {
  const count = props.messages.length;
  return (
    <div>
      {count === 0 ? (
        <p>No tienes nuevos mensajes por leer</p>
      ) : (
        <p>Tienes {count} mensajes sin leer</p>
      )}
    </div>
  );
}

export default App;
