import mongoose from "mongoose";

// Definición del esquema de Licencia
// const licenciaSchema = new mongoose.Schema({
//     titulo: { type: String, required: true },
//     imagen: { type: String, required: true },
//     precio: { type: Number, required: true }
// }, { timestamps: true });

// // Definición del esquema de Beat
// const beatSchema = new mongoose.Schema({
//     titulo: { type: String, required: true },
//     imagen: { type: String, required: true },
//     precio: { type: Number, required: true }
// }, { timestamps: true });

// Definición del esquema de Usuario
const usuarioSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    username: { type: String, required: true,default:'user' },
    profileimg: { type: String, required: true },
    mail: { type: String, required: true },
    celular: { type: String, required: true },
    pais: { type: String, required: true },
    generos: [{ type: String, required: true }],
    colors: [{ type: String}],
    descripcion: { type: String, required: true },
    imagenes: [{ type: String,  }],
    licencias: [{ type: String }],
    beats: [{ type: String }],
    mode: { type: String },
    videos:[{ type: String }],
    suscripto: { type: Boolean },
    links:{
        instagram: { type: String },
        facebook: { type: String },
        tiktok: { type: String },
        youtube: { type: String },
        web: { type: String },
        youtube: { type: String },
        twitter: { type: String }, 
    }
  },
  { timestamps: true }
);

// Creación del modelo de Usuario
const Usuario =
  mongoose.models.Usuario || mongoose.model("Usuario", usuarioSchema);

export default Usuario;
