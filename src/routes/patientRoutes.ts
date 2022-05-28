import { Router } from "express";
import { patientController } from "../components/Patients/PatientController";
import { verifyUser } from "../middleware/verifyUser";


export const patientRoutes = Router();

patientRoutes.get('/patient', patientController.getPatients);
patientRoutes.get('/patient/:id', verifyUser, patientController.getPatientById);


patientRoutes.post('/patient', verifyUser, patientController.createPatient);

