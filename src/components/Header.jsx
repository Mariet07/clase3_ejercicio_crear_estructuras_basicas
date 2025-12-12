import React from 'react'

function Header() {
  return (
    <>
    <header style={{
        backgroundColor: "#688669ff", //a dif de css se usa camel case en vez de separado (background-color)
        padding: "10px",
        textAlign: "center",
        color: "white" //color de texto
    }}>
        <h1>Bienvenidos a mi App React</h1>
    </header>
    </>
  );
} export default Header;

