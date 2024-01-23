'use client'
import React, { useState } from 'react';

function UserForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        mail: '',
        celular: '',
        pais: '',
        generos: [],
        descripcion: '',
        imagenes: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleArrayChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value.split(',')
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Aquí podrías enviar los datos a tu API
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                required
            />
            <input
                type="email"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                placeholder="Correo electrónico"
                required
            />
            <input
                type="text"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                placeholder="Celular"
                required
            />
            <input
                type="text"
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                placeholder="País"
                required
            />
            <input
                type="text"
                name="generos"
                value={formData.generos.join(',')}
                onChange={handleArrayChange}
                placeholder="Géneros (separados por comas)"
                required
            />
            <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Descripción"
                required
            />
            <input
                type="text"
                name="imagenes"
                value={formData.imagenes.join(',')}
                onChange={handleArrayChange}
                placeholder="Imágenes (URLs separadas por comas)"
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
}
