import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";



// yup schema
export const schema = yup.object({
    firstName: yup.string().required("First name is required."),
    lastName: yup.string().required("Last name is required."),
    email: yup.string().email("Invalid email address.").required("Email is required."),
    phone: yup.string().required("Phone number is required."),
    topic: yup.string().required("Please select a topic."),
    language: yup.string().required("Please select a language."),
    communication: yup.string().required("Please select a communication method."),
    time: yup.string().required("Please select a preferred time."),
    agree: yup.boolean().oneOf([true], "You must agree to the terms.").required(),
  });
  

export type ConsultationFormValues = yup.InferType<typeof schema>;

export const useConsultationForm = () => {

  const form = useForm<ConsultationFormValues>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: ConsultationFormValues) => {
  };

  return { form, onSubmit };
};
