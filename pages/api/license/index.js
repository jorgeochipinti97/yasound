import { connectDB } from "@/app/database/db";
import Licencia from "@/app/models/license";


export default async function handler(req, res) {
  const { method } = req;

  await connectDB();

  switch (method) {
    case 'GET':
      try {
        const licencias = await Licencia.find({});
        res.status(200).json({ success: true, data: licencias });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const licencia = await Licencia.create(req.body); // Ensure validation or sanitation of input
        res.status(201).json({ success: true, data: licencia });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const licencia = await Licencia.findByIdAndUpdate(req.query.id, req.body, {
          new: true,
          runValidators: true,
        });
        res.status(200).json({ success: true, data: licencia });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const deletedLicencia = await Licencia.deleteOne({ _id: req.query.id });
        if (!deletedLicencia.deletedCount) {
          return res.status(404).json({ success: false });
        }
        res.status(204).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
