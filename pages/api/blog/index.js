import { connectDB } from "@/app/database/db";
import Blog from "@/app/models/Blog";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
    return res.status(500).json({
      success: false,
      error: "Error interno del servidor al conectar a la base de datos.",
    });
  }

  switch (req.method) {
    case "POST":
      try {
        const usuario = await Blog.create(req.body);
        res.status(200).json({ success: true, data: usuario });
      } catch (error) {
        console.error("Error en POST /api/user:", error);
        res.status(400).json({ success: false, error: error.message });
      }
    case "PUT":
      try {
        const { _id } = req.body;
        if (!_id) {
          return res.status(400).json({
            success: false,
            error:
              "Es necesario proporcionar el ID del usuario para actualizar.",
          });
        }
        const usuarioActualizado = await Blog.findByIdAndUpdate(_id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!usuarioActualizado) {
          return res
            .status(404)
            .json({ success: false, error: "Blog no encontrado." });
        }
        res.status(200).json({ success: true, data: usuarioActualizado });
      } catch (error) {
        console.error("Error en PUT /api/user:", error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "GET":
      try {
        const usuarios = await Blog.find().sort({ createdAt: 1 });
        res.status(200).json({ success: true, data: usuarios });
      } catch (error) {
        console.error("Error en GET /api/user:", error);

        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "DELETE":
      try {
        const { _id } = req.query; 
        if (!_id) {
          return res.status(400).json({
            success: false,
            error: "Es necesario proporcionar el ID del blog para eliminar.",
          });
        }
        const blogEliminado = await Blog.findByIdAndDelete(_id);
        if (!blogEliminado) {
          return res
            .status(404)
            .json({ success: false, error: "Blog no encontrado." });
        }
        res.status(200).json({ success: true, data: blogEliminado });
      } catch (error) {
        console.error("Error en DELETE /api/blog:", error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      console.warn(`Método no permitido: ${req.method}`);
      res
        .status(405)
        .json({ success: false, error: `Método ${req.method} no permitido` });
      break;
  }
}
