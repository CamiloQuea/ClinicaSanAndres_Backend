import mongoose, { model, Schema, Types } from "mongoose";

export interface Service {
    _id: Types.ObjectId,
    name: string,


}

export interface Department {
    _id: Types.ObjectId,
    name: string,
    services: Service[]
}

const serviceSchema = new Schema<Service>({
    name: { type: String }
})


const departmentSchema = new Schema<Department>({
    name: { type: String },
    services: {
        type: [serviceSchema],

    }
})


export const DepartmentModel = mongoose.model<Department>('Department', departmentSchema);