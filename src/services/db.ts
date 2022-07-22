import mongoose from 'mongoose'
import { DepartmentExample } from '../components/Departments/DepartmentExample';
import { DepartmentModel } from '../components/Departments/DepartmentSchema';
import { listHistories } from '../components/MedicalHistories/MedicalHistories';
import { MedicalHistorytModel } from '../components/MedicalHistories/MedicalHistorySchema';
import { PatientExample } from '../components/Patients/PatientExample';
import { PatientModel } from '../components/Patients/PatientSchema';
import { userBusiness } from '../components/Users/UserBusiness';
import { userDao } from '../components/Users/UserDao';
import { UserExample } from '../components/Users/UserExample';
import { UserModel } from '../components/Users/UserSchema';
import { faker } from '@faker-js/faker'

const createData = async () => {
    // mongoose.connection.db.dropDatabase();

    //VERIFICAR SI HAY DATOS
    const verify = await MedicalHistorytModel.find();

    //SI HAY DATOS CANCELAR INCIALIZACION
    if (verify.length !== 0) return;


    //AGREGANDO DEPARTAMENTOS

    const depMod = DepartmentExample.map((el,index)=>{

       const modServ =  el.services.map((service, index)=>{
            //@ts-ignore
            return {...service, price: service.price * el.m}
        })

        const lastReturn =  {...el, services: modServ, m: undefined }
        
        
        return lastReturn
    })

    const departmentList = await DepartmentModel.insertMany(depMod);

    

    //AGREGANDO USUARIOS

    //---AGREGANDO LOS DEPARTAMENTOS GENERADOS
    const UserModified = UserExample.map((user) => {

        const departmentSelected = departmentList[Math.floor(Math.random() * departmentList.length)];

        user.department = {
            _id: departmentSelected._id,
            name: departmentSelected.name
        }

        return { ...user, _id: undefined };

    })


    //INSERTANDO USUARIOS
    const userList = await UserModel.insertMany(UserModified)

    //INGRESANDO PACIENTES
    const patientsList = await PatientModel.insertMany(PatientExample)


    //CREACION DE HISTORIAS
    const historiesList = listHistories(departmentList, patientsList, userList, 1000)


    //INSERTANDO LAS HISTORIAS
    await MedicalHistorytModel.insertMany(historiesList)
}

export const initDB = async () => {

    mongoose.connect('mongodb://localhost:27017/NEWtest', async () => {

        await createData();

    });



}
