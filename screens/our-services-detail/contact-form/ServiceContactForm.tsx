"use client";


import PhoneInput from "@/components/ui/PhoneInput";
import Input from "@/components/ui/input";
import Button from "@/components/ui/Button";
import { useContactForm } from "./useContactForm";
import { FormData } from "./types";
import { languages } from "@/screens/free-consultation/constants";



export default function ServiceContactForm() {

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    register,
    onSubmit,
  } = useContactForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="bg-white outline outline-1 outline-gray-200 rounded-2xl items-center px-6 py-10 shadow-md gap-5 grid md:grid-cols-3 grid-cols-1">

        <PhoneInput
          setValueHookForm={setValue}
          watchHookForm={watch}
          errors={errors}
          name="phone"
          height="!h-14"
          bgDark
          
        />

        <Input
        height="h-14"
          bgDark
          {...register('language')} isSelect error={errors.language?.message} showError={false}>
          <option value="">Which language do we speak?</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
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
