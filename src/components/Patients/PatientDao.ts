import { Filter, ObjectId } from "mongodb";
import { Patient, patientComponent } from "./PatientSchema";

class PatientDao {

    async getPatients(filter: Filter<Patient>) {

        const patientsCollection = await patientComponent.getCollection();

        const patientsList = await patientsCollection.find(filter).toArray();

        return patientsList;

    }

    async getPatientById(id: string) {

        const patientsCollection = await patientComponent.getCollection();

        const patientsList = await patientsCollection.findOne({ _id: new ObjectId(id) });

        return patientsList;

    }

    async getPatientByDni(dni: string) {
        const patientsCollection = await patientComponent.getCollection();

        const patientsList = await patientsCollection.findOne({ dni });

        return patientsList;
    }

    async createPatient(patient: Patient) {

        const patientsCollection = await patientComponent.getCollection();

        const patientCreated = await patientsCollection.insertOne(patient);

        return patientCreated;

    }

}

export const patientDao = new PatientDao();