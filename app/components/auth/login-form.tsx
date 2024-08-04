'use client'

import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,

} from "@/components/ui/form"
import { CardWrapper } from "./card-wrapper";
import { resolve } from "path";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "../ui/form-error";
import { FormSuccess } from "../ui/form-success";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";

export const LoginForm = () => { //we do not export default because we are just exporting a single component not a page.
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver : zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    
    //this is the wrapper that passes in the validated values
    const onSubmit = (values:z.infer<typeof LoginSchema>) => {
        //when we submit let us clear all the errors and success messages
        setSuccess("")
        setError("")
        
        startTransition(() => { //simple loading state imported from react
            login(values)
            .then((data) => {
                setError(data.error)
                setSuccess(data.success)
            }); //server action
        })
    }

    //Server actions pass things from the client to the server. Pretty cool? right?
    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
            >
             <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="john.doe@example.com"
                                        type="email"
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                          <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="******"
                                        type="password"
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                     {/* Only one of these will be loaded*/}
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full">
                        Login
                    </Button>
                </form>
             </Form>
        </CardWrapper>
    )
} 