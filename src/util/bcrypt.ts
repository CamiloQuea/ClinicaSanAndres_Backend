import { compare, genSalt, hash } from 'bcrypt'

export const encryptPassword = async (password: string) => {

    const salt = await genSalt(10);

    const passwordHashed = await hash(password, salt);

    return passwordHashed;

}

export const comparePassword = async (password: string, hashedPassword: string) => {

    const check = await compare(password, hashedPassword);

    return check;

}