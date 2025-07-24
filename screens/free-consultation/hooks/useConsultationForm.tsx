import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { communicationMethods, contactTimes, languages, topics } from "../constants";
import {addFormEntrance} from "@/helpers/api/addFormEntrance"

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

  const [successfulResult, setSuccessfulResult ] = useState(false)
  const [loading, setLoading ] = useState(false)

  const form = useForm<ConsultationFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      topic: topics[0],
      language: languages[0],
      communication: communicationMethods[0],
      time: contactTimes[0],
    }
  });

  const onSubmit = async (data: ConsultationFormValues) => {
      setLoading(true)
      await addFormEntrance(data,"consultation",setSuccessfulResult)
      setLoading(false)
  };

  return { form, onSubmit, successfulResult,loading };
};
