import { ObjectId } from "mongodb";
import { Collection } from "../helpers/Collection";

const collectionName = 'medicalHistories';

interface MedicalHistory {
    number: string,
    filiacion: {
        name: string,
        fatherSurname: string,
        motherSurname: string,
        dni: string,
        edad: Number,
        gender: string,
        birthday: Date,
        attorney: string,
        patient_id: ObjectId
    },
    anamnesis: {
        record: string,
        sickTime: string,
        consultationReason: {
            title: string,
            description: string
        },
        physicalExam: {
            fc: string,
            fr: string,
            t: string,
            pa: string,
            sat02: string,
        }
    },
    admissionDiagnosis: [{ title: string, type: string, cie: string }],
    auxiliaryExam: string,
    treatment: {
        description: string,
        department: {
            _id: ObjectId,
            description: string
        },
        service: {
            _id: ObjectId,
            description: string
        }
    },
    doctor: {
        _id: ObjectId,
        name: string,
        fatherSurname: string,
        motherSurname: string,
    }

}


const indexes = [{ field: 'number', mode: 'unique' }];

export const medicalHistoryComponent = new Collection<MedicalHistory>(collectionName, indexes);