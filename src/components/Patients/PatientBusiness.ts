import { Filter } from "mongodb";
import { patientDao } from "./PatientDao";
import { Patient } from "./PatientSchema";
import { patientValidation } from "./utils/PatientValidation";

class PatientBusiness {

    async getPatients(query: { dni?: string }) {

        const patientsList = await patientDao.getPatients(query);

        return patientsList;

    }

    async getPatientById(body: { id: string }) {

        const patient = await patientDao.getPatientById(body.id);

        return patient;

    }

    async getPatientByDni(body: { dni: string }) {
        const patient = await patientDao.getPatientByDni(body.dni);

        return patient;
    }

    async createPatient(body: Patient) {

        const { error, value, details } = patientValidation(body);

        if (error && !value) return { error, details }

        const patientCreated = await patientDao.createPatient(body);

        return patientCreated;

    }

}

export const patientBusiness = new PatientBusiness();