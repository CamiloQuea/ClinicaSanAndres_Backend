import { model, Schema } from "mongoose";

interface IServices extends Document{
    
    name: String,
    cost: String,
    department:{
        _id:Schema.Types.ObjectId,
        name:string
    }
    
}

const serviceSchema = new Schema<IServices>({
    name: String,
    cost: String,
    department:{
        _id:{
            type:Schema.Types.ObjectId,
            ref: 'Department'
        },
        name: String
    }
},{  strict: false })

export const patientModel = model<IServices>('Service', serviceSchema);
