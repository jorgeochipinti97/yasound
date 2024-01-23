
import { connectDB } from "@/app/database/db";
import Usuario from "@/app/models/User";

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case "POST":
      try {
        const usuario = await Usuario.create(req.body).lean();
        res.status(200).json({ success: true, data: usuario });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "GET":
      try {
        const usuarios = await Usuario.find().sort({ createdAt: 1 }).lean();
        res.status(201).json({ success: true, data: usuarios });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(405).json({ success: false, error: "Method Not Allowed" });
      break;
  }
}
