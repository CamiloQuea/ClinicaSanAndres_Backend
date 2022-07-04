import mongoose, { model, Schema, Types } from "mongoose";

export interface User {
    _id: Types.ObjectId;
    cmp: string,
    name: string,
    fatherSurname: string,
    motherSurname: string,
    email: string,
    phone: string,
    department: {
        _id: Types.ObjectId
        name: string
    },
    password: string,
    rols: string[]
}

const department = new Schema<{
    _id: Types.ObjectId;
    name: string,
}>({
    name: String,
});

const userSchema = new Schema<User>({

    cmp: { type: String },
    name: { type: String },
    fatherSurname: { type: String },
    motherSurname: { type: String },
    email: { type: String },
    phone: { type: String },
    department: {
        type: department
    },
    password: { type: String },
    rols: { type: [String] }

});


export const UserModel = mongoose.model<User>('User', userSchema);

