'use server'

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import {db} from "@/lib/db";
import { getUserByEmail } from "@/data/user";
//adding encruyption logic when a user registers 

export const register = async (values: z.infer<typeof RegisterSchema>) => { //our values have a type, specifically as a LoginSchema
    const validatedFields = RegisterSchema.safeParse(values); //we are parsing the values to see if they are valid

    if(!validatedFields.success) {
        return {error: "Invalid fields"}; //if the fields are not valid, we return an error
    }

    const { email, password, name } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10) //hashing the password

    const existingUser = await getUserByEmail(email)
 
    if (existingUser) {
        return { error: "Email already in use"}
    }

    await db.user.create({
        data: {
            email,
            name,
            password: hashedPassword, //make sure you use the hashed passowrd
        }
    })
        //checking if the user already exists
    
    //TODO send verification email

    return {success: "Email Success"} //returning a default of success
}