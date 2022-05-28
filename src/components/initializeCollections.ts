import { departmentDao } from "./Departments/DepartmentDao";
import { departmentComponent } from "./Departments/DepartmentSchema";
import { medicalHistoryComponent } from "./MedicalHistories/MedicalHistorySchema";
import { patientComponent } from "./Patients/PatientSchema";
import { userComponent } from "./Users/UserSchema"

export const initCollections = async ()=>{
    await departmentComponent.createCollection();
    await patientComponent.createCollection();
    await userComponent.createCollection();
    await medicalHistoryComponent.createCollection();
}