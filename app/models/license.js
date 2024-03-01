import mongoose from "mongoose";

const licenciaSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    beat: { type: String, required: true },
  },
  { timestamps: true }
);

const Licencia =
  mongoose.models.Licencia || mongoose.model("Licencia", licenciaSchema);

export default Licencia;
