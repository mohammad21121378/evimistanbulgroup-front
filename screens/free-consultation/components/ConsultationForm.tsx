
"use client";

import Input from "@/components/ui/input";
import { useConsultationForm } from "../hooks/useConsultationForm";
import { Controller } from "react-hook-form";

const topics = ["Web Development", "Marketing", "Consulting"];
const languages = ["English", "Turkish", "Persian"];
const communicationMethods = ["Email", "Phone", "WhatsApp"];
const contactTimes = ["Morning", "Afternoon", "Evening"];

export default function ConsultationForm() {

    const { form, onSubmit } = useConsultationForm();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = form;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-rows-[auto,1fr] h-full items-start">

            <div className="space-y-4 ">

                <h2 className="text-3xl font-bold text-orange-500">
                    Free Consultation
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="First Name" {...register("firstName")} error={errors.firstName?.message} />
                    <Input placeholder="Last Name" {...register("lastName")} error={errors.lastName?.message} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Email Address" {...register("email")} error={errors.email?.message} />
                    <Input placeholder="Phone Number" {...register("phone")} error={errors.phone?.message} />
                </div>

                <Controller
                    control={control}
                    name="topic"
                    render={({ field }) => (
                        <Input
                            isSelect
                            placeholder="What Do You Need Help With?"
                            {...field}
                            error={errors.topic?.message}
                        >
                            <option value="">Choose the topic you need help with</option>
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
                            placeholder="Preferred Language"
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
                            placeholder="Preferred Communication Method"
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
                            placeholder="Best Time to Contact You"
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

            <div className="mt-auto">
                <div className="flex items-start space-x-2">
                    <input
                        type="checkbox"
                        id="agree"
                        {...register("agree")}
                        className="mt-1"
                    />
                    <label htmlFor="agree" className="text-sm text-gray-700">
                        I agree to the <a href="#" className="underline">Terms & Conditions</a> and the <a href="#" className="underline">Privacy Policy</a>.
                    </label>
                </div>
                {errors.agree && <p className="text-red-500 text-sm">{errors.agree.message}</p>}

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
