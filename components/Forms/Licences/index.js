import React, { useState } from "react";

export const LincenseForm = ({ autor }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones básicas
    if (!titulo.trim() || !descripcion.trim() || precio <= 0) {
      alert("Por favor, complete correctamente todos los campos.");
      return;
    }

    const productoData = { titulo, descripcion, precio: Number(precio), autor };
    console.log(productoData);
    // Aquí puedes procesar los datos del formulario, como enviarlos a un servidor o API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
          min="0.01" // Asegura que el precio no sea cero o negativo
          step="0.01" // Permite valores decimales en el precio
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
