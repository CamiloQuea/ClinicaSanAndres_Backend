import e from 'express';
import Joi, { ObjectSchema } from 'joi';
import { ObjectId } from 'mongodb';
import { User } from '../UserSchema';


export const userValidation = (department: User) => {

    const validator: ObjectSchema<User> = Joi.object<User>({

        name: Joi.string()
            .required()
            .messages({
                'any.required': '"Nombre" es requerido',
                'string.base': '"Nombre" tiene que tener ser string',
            }),
        cmp: Joi.string()
            .required()
            .messages({
                'any.required': '"CMP" es requerido',
                'string.base': '"CMP" tiene que tener ser string',
            }),
        department: Joi.object({
            _id: Joi
                .custom((value, helpers) => {
                    if (!ObjectId.isValid(value))
                        return helpers.error("objectid.invalid")
                    else
                        return value
                }).messages({
                    'custom.base': '"ID de departamento" tiene que tener ser string',
                    "objectid.invalid": "ObjectId de departmento no es valido"
                }),
            name: Joi.string()
                .required()
                .messages({
                    'any.required': '"Nombre de departamento" es requerido',
                    'string.base': '"Nombre de departamento" tiene que tener ser string',
                })
        })
            .required()
            .messages({
                'any.required': 'La informacion del "Departamento" es requerida',
                'object.base': 'La informacion del "Departamento" tiene que tener ser un objeto',
            })
        ,
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
        password: Joi.string()
            .required()
            .messages({
                'any.required': '"Contraseña" es requerida',
                'string.base': '"Contraseña" tiene que tener ser string',
            }),
        phone: Joi.string()
            .required()
            .messages({
                'any.required': '"Celular" es requerido',
                'string.base': '"Celular" tiene que tener ser string',
            }),
        rols: Joi.array()
            .items(Joi.string())
            .required()
            .messages({
                'array.base': '"Rol" debe ser un array de string',
                'string.base': '"Roles" debe ser un array de string'
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