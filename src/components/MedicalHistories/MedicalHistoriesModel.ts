import { Document, model, Schema } from "mongoose";

interface IMedicalHistory{

    filiacion: {
        name: String,
        fatherSurname: String,
        motherSurname: String,
        dni: String,
        edad: Number,
        gender: String,
        birthday: Date,
        attorney: String,
        patient_id: Schema.Types.ObjectId
    },
    anamnesis: {
        record: String,
        sickTime: String,
        consultationReason: {
            title: String,
            description: String
        },
        physicalExam: {
            fc: String,
            fr: String,
            t: String,
            pa: String,
            sat02: String,
        }
    },
    admissionDiagnosis: [{ title: String, type: String, cie: String }],
    auxiliaryExam: String,
    treatment: {
        description: String,
        department: {
            _id: Schema.Types.ObjectId,
            description: String
        },
        service: {
            _id: Schema.Types.ObjectId,
            description: String
        }
    },
    doctor: {
        _id: Schema.Types.ObjectId,
        name: String,
        fatherSurname: String,
        motherSurname: String,
    }

}


const medicalHistorySchema = new Schema<IMedicalHistory>({

    filiacion: {
        name: String,
        fatherSurname: String,
        motherSurname: String,
        dni: String,
        edad: Number,
        gender: String,
        birthday: Date,
        attorney: String,
        patient_id: { type: Schema.Types.ObjectId, ref: 'Patient' },
    },
    anamnesis: {
        record: String,
        sickTime: String,
        consultationReason: {
            title: String,
            description: String
        },
        physicalExam: {
            fc: String,
            fr: String,
            t: String,
            pa: String,
            sat02: String,
        }
    },
    admissionDiagnosis: [{ title: String, type: String, cie: String }],
    auxiliaryExam: String,
    treatment: {
        description: String,
        department: {
            _id: { type: Schema.Types.ObjectId, ref: 'Department' },
            description: String
        },
        service: {
            _id: { type: Schema.Types.ObjectId, ref: 'Service' },
            description: String
        }
    },
    doctor: {
        _id: { type: Schema.Types.ObjectId, ref: 'Doctor' },
        name: String,
        fatherSurname: String,
        motherSurname: String,
    }

}, { timestamps: true, strict: false })

export const medicalHistoryModel = model<IMedicalHistory>('MedicalHistory', medicalHistorySchema);