import { connectDB } from "@/app/database/db";
import Beat from "@/app/models/Beat";


export default async function handler(req, res) {
  // Intenta conectar a la base de datos
  try {
    await connectDB();
  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
    return res.status(500).json({ success: false, error: "Error interno del servidor al conectar a la base de datos." });
  }

  switch (req.method) {
    case "POST":
      try {
        // Crea un nuevo usuario sin llamar a .lean(), ya que es para la creación
        const usuario = await Beat.create(req.body);
        res.status(200).json({ success: true, data: usuario });
      } catch (error) {
        console.error("Error en POST /api/beat:", error);
        // Devuelve un mensaje de error más informativo
        res.status(400).json({ success: false, error: error.message });
      }
      case "PUT":
        try {
          const { _id }  = req.body; // Asume que el identificador del usuario viene en el cuerpo de la solicitud
          if (!_id) {
            return res.status(400).json({ success: false, error: "Es necesario proporcionar el ID del usuario para actualizar." });
          }
          const usuarioActualizado = await Beat.findByIdAndUpdate(_id, req.body, {
            new: true, // Devuelve el documento modificado
            runValidators: true, // Asegura que la actualización cumpla con el esquema del modelo
          });
          if (!usuarioActualizado) {
            return res.status(404).json({ success: false, error: "Beat no encontrado." });
          }
          res.status(200).json({ success: true, data: usuarioActualizado });
        } catch (error) {
          console.error("Error en PUT /api/beat:", error);
          res.status(400).json({ success: false, error: error.message });
        }
      break;
    case "GET":
      try {
        // Busca todos los beat y los devuelve
        const beat = await Beat.find().sort({ createdAt: 1 });
        res.status(200).json({ success: true, data: beat });
      } catch (error) {
        console.error("Error en GET /api/beat:", error);
        // Devuelve un mensaje de error más informativo
        res.status(400).json({ success: false, error: error.message });
      }
      break;
      case "DELETE":
        try {
          const { _id }  = req.body; // Asume que el identificador del usuario viene en el cuerpo de la solicitud
          if (!_id) {
            return res.status(400).json({ success: false, error: "Es necesario proporcionar el ID." });
          }
          const resultado = await Beat.findByIdAndDelete(_id);

          if (!resultado) {
            return res.status(404).json({ success: false, error: "Beat no encontrado." });
          }
          res.status(200).json({ success: true, message: "Beat eliminado con éxito." });
          
        } catch (error) {
          console.error("Error en DELETE /api/beat:", error);
          res.status(400).json({ success: false, error: error.message });
        }
        break;
    default:
      // Maneja correctamente los métodos no permitidos
      console.warn(`Método no permitido: ${req.method}`);
      res.status(405).json({ success: false, error: `Método ${req.method} no permitido` });
      break;
  }
}
