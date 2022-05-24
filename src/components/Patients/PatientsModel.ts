import { Document, model, Schema } from "mongoose";

interface IPatient {
    
    name: String,
    fatherSurname: String,
    motherSurname: String,
    email: String,
    phone: String,
    dni: String,
    birthday:String,
    gender:String,
    allergis:[String],
    healthInsuranceType: String,
    Nationality:String

}

const patientSchema = new Schema<IPatient>({
    name: String,
    fatherSurname: String,
    motherSurname: String,
    email: String,
    phone: String,
    dni:String,
    birthday:String,
    gender:String,
    allergis:[String],
    healthInsuranceType: String,
    Nationality:String
},{  strict: false })

export const patientModel = model<IPatient>('Patient', patientSchema);
