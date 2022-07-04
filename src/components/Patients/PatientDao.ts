import { Filter, ObjectId } from "mongodb";
import { PatientModel, Patient } from "./PatientSchema";

class PatientDao {

    async getPatients(filter?: Filter<Patient>) {

        const patientsList = await PatientModel.find();

        return patientsList;

    }

    async getPatientById(id: string) {

        const patientsList = await PatientModel.findOne({ _id: new ObjectId(id) });

        return patientsList;

    }

    async getPatientByDni(dni: string) {

        const patientsList = await PatientModel.findOne({ dni });

        return patientsList;
    }

    async createPatient(patient: Patient) {

        const patientModel = new PatientModel(patient);

        const patientCreated = await patientModel.save();

        return patientCreated;

    }

}

export const patientDao = new PatientDao();