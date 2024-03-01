import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    subtitulo: { type: String, required: true },
    cuerpo: { type: String, required: true },
    imagenes: [{ type: String, required: true }],
    comentarios: [
      {
        image: { type: String },
        autor: { type: String },
        body: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
