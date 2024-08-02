import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => { //we do not export default because we are just exporting a single component not a page. 
    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
            >
            Login Form!
        </CardWrapper>
    )
} 