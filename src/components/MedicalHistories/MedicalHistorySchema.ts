import mongoose, { Schema, Types } from "mongoose"


export interface MedicalHistory {

    number: string,
    creation_date: Date,
    filiacion: {
        name: string,
        fatherSurname: string,
        motherSurname: string,
        dni: string,
        edad: Number,
        gender: string,
        birthday: string,
        attorney: string | null,
        patient_id: Types.ObjectId,
        entry_date: Date
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
    admissionDiagnosis: { title: string, type: string, cie: string }[],
    treatment: string,
    auxiliaryExam: {
        description: string,
        department: {
            _id: Types.ObjectId,
            description: string
        },
        service: {
            _id: Types.ObjectId,
            description: string
        },
        consultation_date: Date,
        doctor: {
            _id: Types.ObjectId,
            name: string,
            fatherSurname: string,
            motherSurname: string,
        }
    }[],
    creator: {
        _id: Types.ObjectId,
        name: string,
        fatherSurname: string,
        motherSurname: string,
    }

}

const medicalHistorySchema = new Schema<MedicalHistory>({

    number: { type: String },
    creation_date: { type: Date },
    filiacion: {
        type: {
            name: { type: String },
            fatherSurname: { type: String },
            motherSurname: { type: String },
            dni: { type: String },
            edad: Number,
            gender: { type: String },
            birthday: Date,
            attorney: { type: String },
            patient_id: mongoose.Types.ObjectId,
            entry_date: Date
        }
    },
    anamnesis: {
        type: {
            record: { type: String },
            sickTime: { type: String },
            consultationReason: {
                title: { type: String },
                description: { type: String }
            },
            physicalExam: {
                fc: { type: String },
                fr: { type: String },
                t: { type: String },
                pa: { type: String },
                sat02: { type: String },
            }
        }
    },
    admissionDiagnosis: {
        type: [{
            title: { type: String },
            type: { type: String },
            cie: { type: String }
        }]
    },
    treatment: { type: String },
    auxiliaryExam: {
        type: [{
            description: { type: String },
            department: {
                _id: mongoose.Types.ObjectId,
                description: { type: String }
            },
            service: {
                _id: mongoose.Types.ObjectId,
                description: { type: String }
            },
            consultation_date: Date,
            doctor: {
                _id: mongoose.Types.ObjectId,
                name: { type: String },
                fatherSurname: { type: String },
                motherSurname: { type: String },
            }
        }]
    },
    creator: {
        type: {
            _id: mongoose.Types.ObjectId,
            name: { type: String },
            fatherSurname: { type: String },
            motherSurname: { type: String },
        }
    }

})


export const MedicalHistorytModel = mongoose.model<MedicalHistory>('MedicalHistory', medicalHistorySchema);