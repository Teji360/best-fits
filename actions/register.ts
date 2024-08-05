'use server'

import * as z from "zod";
import { RegisterSchema } from "@/schemas";


export const register = async (values: z.infer<typeof RegisterSchema>) => { //our values have a type, specifically as a LoginSchema
    const validatedFields = RegisterSchema.safeParse(values); //we are parsing the values to see if they are valid

    if(!validatedFields.success) {
        return {error: "Invalid fields"}; //if the fields are not valid, we return an error
    }

    return {success: "Email Success"} //returning a default of success
}