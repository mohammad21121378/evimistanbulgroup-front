'use client';

import PhoneInputReact from 'react-phone-input-2';
import { ChevronDown } from 'lucide-react';
import { FC, useState } from 'react';
import cn from 'classnames';
import { UseFormSetValue, UseFormWatch, Path, FieldErrors } from 'react-hook-form';

interface PhoneInputProps<T extends Record<string, any>> {
    setValueHookForm: UseFormSetValue<T>;
    watchHookForm: UseFormWatch<T>;
    name: Path<T>;
    errors: FieldErrors<T>;
    defaultCountry?: string;
    placeholder?: string;
    disabled?: boolean;
    bgDark?: boolean;
    height?: string;
}

const PhoneInput = <T extends Record<string, any>>({
    setValueHookForm,
    watchHookForm,
    name,
    errors,
    defaultCountry = 'us',
    placeholder = 'Enter phone number',
    disabled = false,
    bgDark = false,
    height = "!h-12"
}: PhoneInputProps<T>) => {

    const [isFocused, setIsFocused] = useState(false);
    const value = watchHookForm(name);
    

    const error = (errors[name]?.message ?? '') as string;

    return (
        <div className={cn(
            "w-full relative outline outline-1 rounded-[.85rem] transition-all duration-300",
            height,
            {
                "outline-orange-500 ring-4 ring-orange-100": isFocused && !error,
                "outline-[#D9DBE9]": !isFocused && !error && !bgDark,
                "outline-slate-100": !isFocused && !error && bgDark,
                "outline-red-500": error && !isFocused,
                "outline-red-500 outline-2 ring-4 ring-red-200": isFocused && error,
                "!bg-white bg-white-phone-input": !bgDark,
                "!bg-slate-100": bgDark,
            }
        )
        }>
            <PhoneInputReact
                country={defaultCountry}
                enableSearch
                value={value}
                onChange={(val) =>
                    setValueHookForm(name, val as T[keyof T], {
                        shouldValidate: true,
                        shouldDirty: true,
                    })
                }
                disabled={disabled}
                prefix="+"
                containerClass="w-full !rounded-xl relative !outline-none !outline-0"
                dropdownClass="!z-[1000] !top-[85%] !left-0 !outline !outline-1 !outline-[#D9DBE9] !shadow-md !rounded-xl !w-full [&>input]:!w-full "
                buttonClass={cn(
                    "!border-none !flex items-center !pr-2.5 !pl-2 !static",
                    bgDark ? "!bg-slate-200 hover:!bg-slate-200" : "!bg-white hover:!bg-white"
                )}
                inputClass={cn(
                    "!w-full !text-sm !rounded-2xl focus:!outline-none",
                    height,
                    bgDark ? "!bg-slate-100 !text-gray-600" : "!bg-white !text-gray-600",
                    "md:!pl-16 !pl-20"
                )}
                dropdownStyle={{ zIndex: 9999 }}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <div className="absolute md:left-10 left-12 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <ChevronDown size={16} />
            </div>
        </div>
    );
};

export default PhoneInput;
