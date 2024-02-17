import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true,},
    username: { type: String, required: true, unique: true  },
    profileimg: { type: String },
    email: { type: String, required: true },
    celular: { type: String, required: true },
    pais: { type: String, required: true },
    generos: [{ type: String }],
    role:{ type: String },
    colors: [{ type: String }],
    descripcion: { type: String, required: true },
    imagenes: [{ type: String }],
    licencias: [{ type: String }],
    beats: [{ type: String }],
    mode: { type: String },
    videos: [{ type: String }],
    premium: { type: Boolean, default: false },
    linkInstagram: { type: String },
    linkFacebook: { type: String },
    linkTikTok: { type: String },
    linkWeb: { type: String },
    linkYouTube: { type: String },
    linkTwitter: { type: String },
    linkSpotify: { type: String },
    linkApple: { type: String },
  },
  { timestamps: true }
);

// Creación del modelo de Usuario
const Usuario =
  mongoose.models.Usuario || mongoose.model("Usuario", usuarioSchema);

export default Usuario;
