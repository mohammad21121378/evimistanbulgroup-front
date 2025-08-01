import * as yup from "yup";
import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
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
    propertyId: yup.number().nullable().optional().default(undefined),

  });
  

export type ConsultationFormValues = yup.InferType<typeof schema>;

export const useConsultationForm = (initialValues?: Partial<ConsultationFormValues>) => {

  const [successfulResult, setSuccessfulResult ] = useState(false)
  const [loading, setLoading ] = useState(false)

  const form = useForm<ConsultationFormValues>({
    resolver: yupResolver(schema) as Resolver<ConsultationFormValues>,
    defaultValues: {
      topic: topics[0],
      language: languages[0],
      communication: communicationMethods[0],
      time: contactTimes[0],
      propertyId: undefined,
      ...initialValues,
    }
  });

  useEffect(() => {
    if (initialValues) {
      form.reset({
        topic: topics[0],
        language: languages[0],
        communication: communicationMethods[0],
        time: contactTimes[0],
        propertyId: undefined,
        ...initialValues,
      });
    }
  }, [initialValues]);
  

  const onSubmit = async (data: ConsultationFormValues) => {
      setLoading(true)      
      await addFormEntrance(data, "consultation", setSuccessfulResult)
      setLoading(false)
  };

  return { form, onSubmit, successfulResult,loading };
};
