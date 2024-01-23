import mongoose from 'mongoose';


const licenciaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true }
}, { timestamps: true });

const beatSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true }
}, { timestamps: true });

// Definición del esquema de Usuario
const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    mail: { type: String, required: true },
    celular: { type: String, required: true },
    pais: { type: String, required: true },
    generos: [{ type: String, required: true }],
    descripcion: { type: String, required: true },
    imagenes: [{ type: String, required: true }],
    licencias: [licenciaSchema],
    beats: [beatSchema]
}, { timestamps: true });

// Creación del modelo de Usuario
const Usuario = mongoose.models.Usuario || mongoose.model('Usuario', usuarioSchema);

export default Usuario;
