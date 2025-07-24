import { UseFormReturn } from "react-hook-form";
import { ConsultationFormValues } from "./hooks/useConsultationForm";

export interface FreeConsultationProps {
    
}

export interface ToggleButtonProps {
    isOpen?: boolean;
    onClick: () => void
}

export interface SuccessfulResultProps {
    onClose: () => void
}

export type LeftSideProps = {
    isOpen: boolean;
}

export interface ConsultationFormHook {
    form: UseFormReturn<ConsultationFormValues>;
    onSubmit: (data: ConsultationFormValues) => void;
    successfulResult: boolean;
    loading: boolean;
};

// export interface SidebarProps extends ConsultationFormHook{
//     isOpen: boolean;
// }

export interface ConsultationFormProps extends ConsultationFormHook{
    
}

export interface SidebarProps extends ConsultationFormHook{
    isOpen: boolean;
    onClose: () => void;
}