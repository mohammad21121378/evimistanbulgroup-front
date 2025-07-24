import { ConsultationFormValues } from '@/screens/free-consultation/hooks/useConsultationForm';
import { create } from 'zustand';

interface ConsultationStore {
    isOpen: boolean;
    initialValues?: Partial<ConsultationFormValues>;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    setInitialValues: (values: Partial<ConsultationFormValues>) => void;
}

export const useConsultationStore = create<ConsultationStore>((set) => ({
    isOpen: false,
    initialValues: {},
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false, initialValues: undefined }),
    setInitialValues: (values) => set({ initialValues: values }),
    onToggle: () => set(state => ({ isOpen: !state.isOpen })),
}));
