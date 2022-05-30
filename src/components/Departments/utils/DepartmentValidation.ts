import Joi, { ObjectSchema } from 'joi';
import { Department } from '../DepartmentSchema';


export const departmentValidation = (department: Department) => {

    const validator: ObjectSchema<Department> = Joi.object<Department>({

        name: Joi.string()
            .required()
            .messages({
                'any.required': '"Nombre" es requerido',
                'string.base': '"Nombre" tiene que tener ser letra',
            }),
        services: Joi.array()
            .items(Joi.string())
            .default([])
            .messages({
                'array.base': '"Services" debe ser un array de string',
                'string.base': '"Services" debe ser un array de string'
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