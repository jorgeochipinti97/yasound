import mongoose from "mongoose";

const beatSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    linkmp3: { type: String, required: true },
    linkwav: { type: String, required: true },
    precio: { type: Number, required: true },
    image: { type: String, required: true },
    genero: [{ type: String, required: true }],
    autor: { type: String, required: true },
    licenses:[{
      titulo:{ type: String, required: true },
      precio:{ type: Number, required: true },
      descripcion:{ type: String, required: true },
      formatos:{ type: String, required: true },
    }]
  },
  { timestamps: true }
);

const Beat = mongoose.models.Beat || mongoose.model("Beat", beatSchema);

export default Beat;
