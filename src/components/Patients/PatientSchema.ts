import mongoose, { model, Schema, Types } from "mongoose";

export interface Patient {
    _id: Types.ObjectId
    name: string,
    fatherSurname: string,
    motherSurname: string,
    email: string,
    phone: string,
    dni: string,
    birthday: string,
    gender: string,
    allergies: string[],
    healthInsuranceType: string,
    nationality: string
}


const patientSchema = new Schema<Patient>({
    name: { type: String },
    fatherSurname: { type: String },
    motherSurname: { type: String },
    email: { type: String },
    phone: { type: String },
    dni: { type: String },
    birthday: { type: String },
    gender: { type: String },
    allergies: { type: [String] },
    healthInsuranceType: { type: String },
    nationality: { type: String }
})


export const PatientModel = mongoose.model<Patient>('Patient', patientSchema);