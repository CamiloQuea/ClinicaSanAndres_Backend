import { model, Schema } from "mongoose";

interface IDepartment {

    name: string

}

export const departmentSchema = new Schema<IDepartment>({

    name: String
    
})

export const departmentModel = model<IDepartment>('Department', departmentSchema);
