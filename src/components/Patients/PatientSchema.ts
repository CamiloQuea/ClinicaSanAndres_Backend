import { ObjectId } from "mongodb";
import { Collection } from "../Collection";
import { PatientExample } from "./PatientExample";

const collectionName = 'patients';

export interface Patient {
    _id: ObjectId
    name: string,
    fatherSurname: string,
    motherSurname: string,
    email: string,
    phone: string,
    dni: string,
    birthday: string,
    gender: string,
    allergis: string[],
    healthInsuranceType: string,
    nationality: string
}

const indexes = [{ field: 'dni', mode: 'unique' }]

export const patientComponent = new Collection<Patient>(collectionName, indexes, async (patientCollection) => {
    const patients = PatientExample.map((patient, i) => {

        return {
            ...patient,
            dni: (i * 10000).toString()
        }

    })
    patientCollection.insertMany(patients);
})