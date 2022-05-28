import { NextFunction, Request, Response } from "express";
import { patientBusiness } from "./PatientBusiness";

class PatientController {

    async getPatients(req: Request, res: Response, next: NextFunction) {

        const query = req.query as { dni: string };

        const patientsList = await patientBusiness.getPatients(query);

        res.json(patientsList);

    }

    async getPatientById(req: Request, res: Response, next: NextFunction) {

        const { id } = req.params;

        const patientsList = await patientBusiness.getPatientById({ id });

        res.json(patientsList);

    }


    async createPatient(req: Request, res: Response, next: NextFunction) {

        const body = req.body;

        const patientsList = await patientBusiness.createPatient(body);

        res.json(patientsList);

    }


}

export const patientController = new PatientController();