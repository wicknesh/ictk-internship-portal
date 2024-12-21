import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    name: { type: String, required: true},
    document: { type: Buffer, required: true },
    project_id: { type: String, required: true },
    type: { type: String, required: true }
});

export default mongoose.model('document', documentSchema);