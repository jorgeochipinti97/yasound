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
    case "GET":
      try {
        const { _id } = req.query;
        if (_id) {
          // Buscar y retornar el blog con el ID especificado
          const blog = await Blog.findById(id);
          if (!blog) {
            return res.status(404).json({ success: false, error: "Blog no encontrado." });
          }
          res.status(200).json({ success: true, data: blog });
        } else {
          // Retornar todos los blogs si no se especifica un ID
          const blogs = await Blog.find({});
          res.status(200).json({ success: true, data: blogs });
        }
      } catch (error) {
        console.error("Error en GET /api/blog:", error);
        res.status(400).json({ success: false, error: error.message });
      }
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
    case "PUT":
      try {
        const { _id } = req.query;
        if (!_id) {
          return res.status(400).json({
            success: false,
            error: "Es necesario proporcionar el ID del blog para actualizar.",
          });
        }
        const blogActualizado = await Blog.findByIdAndUpdate(_id, req.body, {
          new: true,
        });
        if (!blogActualizado) {
          return res
            .status(404)
            .json({ success: false, error: "Blog no encontrado." });
        }
        res.status(200).json({ success: true, data: blogActualizado });
      } catch (error) {
        console.error("Error en PUT /api/blog:", error);
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
