
"use client";

import Input from "@/components/ui/input";
import { useConsultationForm } from "../hooks/useConsultationForm";
import { Controller } from "react-hook-form";
import Checkbox from "@/components/ui/input/Checkbox";
import PhoneInput from "@/components/ui/PhoneInput";
import LabelInput from "@/components/ui/input/LabelInput";
import ErrorInput from "@/components/ui/ErrorInput";

const topics = [
    "Get Turkish Citizenship",
    "Buy Property in Turkey",
    "Sell My Property",
    "Rent a Property",
    "Apply for a Residence Permit",
    "Work in Turkey",
    "Study in Turkey",
    "Start a Company / Do Business",
    "Open a Bank Account or Get Credit",
    "Transfer Money",
    "Get Medical Treatment in Turkey",
    "Relocate with My Family",
    "Explore Tours & Leisure Activities",
    "Ask About Something Else",
];
const languages = [
    "English",
    "Turkish",
    "Arabic",
    "Farsi (Persian)",
    "German",
    "Russian",
    "French",
];
const communicationMethods = [
    "WhatsApp",
    "Telegram",
    "Email",
    "Phone Call",
    "FaceTime Call",
    "Google Meet Call",
    "Zoom Call",
    "Teams Call",
    "No Preference",
];
const contactTimes = [
    "Morning (9am–12pm)",
    "Afternoon (12pm–4pm)",
    "Evening (4pm–8pm)",
    "Anytime",
];

export default function ConsultationForm() {

    const { form, onSubmit, successfulResult } = useConsultationForm();
    const {
        register,
        control,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitted },
        watch
    } = form;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-rows-[auto,auto,1fr] h-full items-start">

            <h2 className="text-3xl font-bold text-orange-500 px-1">
                Free Consultation
            </h2>

            <div className="space-y-4 mt-4 px-1 pb-px max-h-[75vh] overflow-y-auto overflow-x-visible scrollbar-sm">


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Exp. John " label="First Name" {...register("firstName")} error={errors.firstName?.message} />
                    <Input placeholder="Exp. Carter" label="Last Name" {...register("lastName")} error={errors.lastName?.message} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Exp. abc@gmail.com" label="Email Address" {...register("email")} error={errors.email?.message} />
                    {/* <Input placeholder="Phone Number" label="Phone Number" {...register("phone")} error={errors.phone?.message} /> */}
                    <div>
                        <LabelInput label="Phone Number" />
                        <PhoneInput
                            setValueHookForm={setValue}
                            watchHookForm={watch}
                            errors={errors}
                            name="phone"
                        />
                        <ErrorInput error={errors.phone?.message} />
                    </div>
                </div>

                <Controller
                    control={control}
                    name="topic"
                    render={({ field }) => (
                        <Input
                            isSelect
                            placeholder="What Do You Need Help With?"
                            label="What Do You Need Help With?"
                            {...field}
                            error={errors.topic?.message}
                        >
                            {topics.map((topic) => (
                                <option key={topic} value={topic}>{topic}</option>
                            ))}
                        </Input>
                    )}
                />

                <Controller
                    control={control}
                    name="language"
                    render={({ field }) => (
                        <Input
                            isSelect
                            placeholder="Preferred Language" label="Preferred Language"
                            {...field}
                            error={errors.language?.message}
                        >
                            <option value="">Choose your preferred language</option>
                            {languages.map((lang) => (
                                <option key={lang} value={lang}>{lang}</option>
                            ))}
                        </Input>
                    )}
                />

                <Controller
                    control={control}
                    name="communication"
                    render={({ field }) => (
                        <Input
                            isSelect
                            placeholder="Preferred Communication Method" label="Preferred Communication Method"
                            {...field}
                            error={errors.communication?.message}
                        >
                            <option value="">Choose your preferred communication method</option>
                            {communicationMethods.map((method) => (
                                <option key={method} value={method}>{method}</option>
                            ))}
                        </Input>
                    )}
                />

                <Controller
                    control={control}
                    name="time"
                    render={({ field }) => (
                        <Input
                            isSelect
                            placeholder="Best Time to Contact You" label="Best Time to Contact You"
                            {...field}
                            error={errors.time?.message}
                        >
                            <option value="">Choose your best available time to contact you</option>
                            {contactTimes.map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </Input>
                    )}
                />
            </div>

            <div className="mt-auto px-1 pt-2.5">

                <Checkbox
                    isSubmitted={isSubmitted}
                    parentClassName="mb-2.5"
                    label={
                        <>
                            I agree to the{" "}
                            <a href="#" className="underline">
                                Terms & Conditions
                            </a>{" "}
                            and the{" "}
                            <a href="#" className="underline">
                                Privacy Policy
                            </a>
                            .
                        </>
                    }
                    defaultChecked={watch("agree")}
                    error={errors.agree?.message}
                    onChange={(value) => setValue("agree", value, { shouldValidate: true })}
                />

                <button
                    type="submit"
                    className="bg-orange-500 mt-2 text-white w-full py-3 rounded-xl shadow hover:bg-orange-600 transition"
                >
                    Submit Request
                </button>
            </div>

        </form>
    );
}
