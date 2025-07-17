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
}

const PhoneInput = <T extends Record<string, any>>({
    setValueHookForm,
    watchHookForm,
    name,
    errors,
    defaultCountry = 'us',
    placeholder = 'Enter phone number',
    disabled = false,
}: PhoneInputProps<T>) => {

    const [isFocused, setIsFocused] = useState(false);
    const value = watchHookForm(name);

    const error = (errors[name]?.message ?? '') as string;

    return (
        <div className={cn(
            "w-full relative outline outline-1 rounded-2lg transition-all duration-300",
            {
                "outline-orange-500 ring-4 ring-orange-100": isFocused && !error,
                "outline-slate-200": !isFocused && !error,
                "outline-red-500": error && !isFocused,
                "outline-red-500 outline-2 ring-4 ring-red-200": isFocused && error,
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
                containerClass="w-full relative !outline-none !outline-0"
                buttonClass="!bg-slate-200 hover:!bg-slate-200 !border-none !flex items-center !pr-2.5 !pl-2"
                inputClass="!w-full !h-14 !pl-16 !bg-slate-100 !text-gray-600 !rounded-lg focus:!outline-none"
                dropdownClass="!z-[1000] w-full [&>input]:!w-full"
                dropdownStyle={{ zIndex: 9999 }}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <div className="absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <ChevronDown size={16} />
            </div>
        </div>
    );
};

export default PhoneInput;
