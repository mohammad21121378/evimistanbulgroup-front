import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { phoneValidation } from "@/utils/validation/phoneValidation";
import { toast } from "@/utils/toast";
import { FormData } from "./types";
import { useConsultationStore } from "@/stores/consultationStore";

const schema = yup.object().shape({
    phone: yup
        .string()
        .required("Phone is required")
        .test('valid-phone', 'Invalid phone number', (value) => phoneValidation(value)),
    language: yup.string().required("Language is required"),
});


export function useContactForm() {

    const { onOpen, setInitialValues } = useConsultationStore();

    const form= useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        setInitialValues({
            phone: data.phone,
            language: data.language,
        });
        onOpen()
    };
    
    return {
        ...form,
        onSubmit
    }
}