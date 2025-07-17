"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "@/components/ui/PhoneInput";
import { phoneValidation } from "@/utils/validation/phoneValidation";
import Input from "@/components/ui/input";
import Button from "@/components/ui/Button";
import { toast } from "@/utils/toast";

type FormData = {
  phone: string;
  language: string;
};

const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone is required")
    .test('valid-phone', 'Invalid phone number', (value) => phoneValidation(value)),
  language: yup.string().required("Language is required"),
});

export default function ServiceContactForm() {
  const [languages, setLanguages] = useState<{ value: string; label: string }[]>([]);

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    register
  } = useForm<FormData>({
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="bg-white outline outline-1 outline-gray-200 rounded-2xl items-center px-6 py-10 shadow-md gap-5 grid md:grid-cols-3 grid-cols-1">

        <PhoneInput<FormData>
          setValueHookForm={setValue}
          watchHookForm={watch}
          errors={errors}
          name="phone"
        />

        <Input {...register('language')} isSelect error={errors.language?.message} showError={false}>
          <option value="">Which language do we speak?</option>
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </Input>

        
        <Button size="full">
        Let's Evaluate Your Options
        </Button>
      </div>
    </form>
  );
}
