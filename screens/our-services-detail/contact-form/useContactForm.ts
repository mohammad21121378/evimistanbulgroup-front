import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { phoneValidation } from "@/utils/validation/phoneValidation";
import { toast } from "@/utils/toast";
import { FormData } from "./types";

const schema = yup.object().shape({
    phone: yup
        .string()
        .required("Phone is required")
        .test('valid-phone', 'Invalid phone number', (value) => phoneValidation(value)),
    language: yup.string().required("Language is required"),
});


export function useContactForm() {
    const [languages, setLanguages] = useState<{ value: string; label: string }[]>([]);

    const form= useForm<FormData>({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const fetchLanguages = async () => {
            const response = await new Promise<{ value: string; label: string }[]>((resolve) =>
                setTimeout(
                    () =>
                        resolve([
                            { value: "english", label: "English" },
                            { value: "spanish", label: "Spanish" },
                            { value: "turkish", label: "Turkish" },
                        ]),
                    500
                )
            );
            setLanguages(response);
        };
        fetchLanguages();
    }, []);

    const onSubmit = (data: FormData) => {
        toast('success', 'Lorem Ipsum is a fictional text with an incomprehensible simplicity produced by the.')
    };
    
    return {
        ...form,
        onSubmit,
        languages
    }
}