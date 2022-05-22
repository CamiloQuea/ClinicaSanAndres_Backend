import { model, Schema } from "mongoose";

interface IDoctor {
    cmp: Number,
    name: String,
    fatherSurname: String,
    motherSurname: String,
    email: String,
    phone: String,
    department: {
        _id: Schema.Types.ObjectId,
        name: String
    },
    password:String,
    rol:String
}


const doctoresSchema = new Schema<IDoctor>({

    cmp: Number,
    name: String,
    fatherSurname: String,
    motherSurname: String,
    email: String,
    phone: String,
    department: {
        _id: { type: Schema.Types.ObjectId, ref: 'Department' },
        name: String
    },
    password:String,
    rol:String
},{  strict: false })

export const doctoresModel = model<IDoctor>('Doctor', doctoresSchema);
