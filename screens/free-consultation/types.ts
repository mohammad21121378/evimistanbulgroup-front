import { UseFormReturn } from "react-hook-form";
import { ConsultationFormValues } from "./hooks/useConsultationForm";

export interface FreeConsultationProps {
    initialOpen?: boolean;
    setInitialOpen?: (val:boolean) => void
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
};

// export interface SidebarProps extends ConsultationFormHook{
//     isOpen: boolean;
// }

export interface ConsultationFormProps extends ConsultationFormHook{
    
}

export interface SidebarProps extends ConsultationFormHook{
    isOpen: boolean;
    chatContent: React.RefObject<HTMLDivElement>;
    onClose: () => void;
}