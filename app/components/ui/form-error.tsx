import {ExclamationTriangleIcon} from "@radix-ui/react-icons"

interface FormErrorProps {
    message?: string
}

export const FormError = ({
    message,
}: FormErrorProps) => {
    if(!message) return null; //if there is no message, return null

    return (
        <div className="bg-destructive/15 p-3 gap-x-2 text-smrounded-md flex items-center text-destructive">
            <ExclamationTriangleIcon className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    )
}