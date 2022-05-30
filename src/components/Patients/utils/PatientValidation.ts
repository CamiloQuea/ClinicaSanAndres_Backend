import e from 'express';
import Joi, { ObjectSchema } from 'joi';
import { ObjectId } from 'mongodb';
import { Patient } from '../PatientSchema';


export const patientValidation = (department: Patient) => {

    const validator: ObjectSchema<Patient> = Joi.object<Patient>({

        name: Joi.string()
            .required()
            .messages({
                'any.required': '"Nombre" es requerido',
                'string.base': '"Nombre" tiene que tener ser string',
            }),
        email: Joi.string()
            .email()
            .required()
            .messages({
                'any.required': '"Email" es requerido',
                'string.base': '"Email" tiene que tener ser string',
                'string.email': 'Tiene que ser un email valido'
            }),
        fatherSurname: Joi.string()
            .required()
            .messages({
                'any.required': '"Apellido paterno" es requerido',
                'string.base': '"Apellido paterno" tiene que tener ser string',
            }),
        motherSurname: Joi.string()
            .required()
            .messages({
                'any.required': '"Apellido materno" es requerido',
                'string.base': '"Apellido materno" tiene que tener ser string',
            }),
        phone: Joi.string()
            .required()
            .messages({
                'any.required': '"Celular" es requerido',
                'string.base': '"Celular" tiene que tener ser string',
            }),
        dni: Joi.string()
            .required()
            .messages({
                'any.required': '"DNI" es requerido',
                'string.base': '"DNI" tiene que tener ser string',
            }),
        birthday: Joi.string()
            .required()
            .messages({
                'any.required': '"Fecha de nacimiento" es requerido',
                'string.base': '"Fecha de nacimiento" tiene que tener ser string',
            }),
        allergis: Joi.array()
            .items(Joi.string())
            .default([])
            .messages({
                'any.base': '"Alergias" debe ser un array de string'
            }),
        nationality: Joi.string()
            .required()
            .messages({
                'any.required': '"Nacionalidad" es requerida',
                'string.base': '"Nacionalidad" tiene que tener ser string',
            }),
        gender: Joi.string()
            .required()
            .messages({
                'any.required': '"Genero" es requerido',
                'string.base': '"Genero" tiene que tener ser string',
            }),
        healthInsuranceType: Joi.string()
            .required()
            .messages({
                'any.required': '"Seguro" es requerido',
                'string.base': '"Seguro" tiene que tener ser string',
            })



    })

    const { error, value } = validator.validate(department, { stripUnknown: true });


    if (error) {

        let path: string = "";
        error.details[0].path.forEach((anided, i) => {

            if (path == '')
                path = anided as string;
            else
                path = path + "." + anided


        });

        return { error: true, details: { message: error.details[0].message, path: path }, value: undefined }
    }

    return { error: false, value };

}