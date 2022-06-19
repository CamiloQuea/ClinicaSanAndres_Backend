import { ObjectId } from "mongodb";
import { Collection } from "../Collection";
import { departmentDao } from "../Departments/DepartmentDao";
import { patientDao } from "../Patients/PatientDao";
import { userDao } from "../Users/UserDao";
import { listHistorias } from "./MedicalHistories";

const collectionName = 'medicalHistories';

export interface MedicalHistory {
    number: string,
    filiacion: {
        name: string,
        fatherSurname: string,
        motherSurname: string,
        dni: string,
        edad: Number,
        gender: string,
        birthday: Date,
        attorney: string | null,
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

export const medicalHistoryComponent = new Collection<MedicalHistory>(collectionName, indexes, async (medicalHistoryCollection) => {

    const departments = await departmentDao.getDepartments();

    const patients = await patientDao.getPatients();

    const users = await userDao.getUsers();

    const historias = await listHistorias(departments, patients, users,10000)

    await medicalHistoryCollection.insertMany(historias)

});