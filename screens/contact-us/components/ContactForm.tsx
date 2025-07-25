import Input from '@/components/ui/input';
import { useContactForm } from '../hooks/useContactForm';
import Button from '@/components/ui/Button';
import PhoneInput from '@/components/ui/PhoneInput';
import ErrorInput from '@/components/ui/ErrorInput';
import Link from '@/components/ui/Link';
import { UseFormReturn } from 'react-hook-form';
import { ContactFormValues } from '../contact.schema';

interface ContactFormProps {
    methods: UseFormReturn<ContactFormValues>;
    onSubmit: (data: ContactFormValues) => void;
    loading: boolean;
  }
  
  const ContactForm = ({ methods, onSubmit, loading }: ContactFormProps) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      watch,
    } = methods;

    const inputClasses = '!text-[.91rem]'
    const inputHeight = '!h-14'

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input height={inputHeight} className={inputClasses} placeholderInInput={false} placeholder="First Name" {...register('firstName')} error={errors.firstName?.message} />
                <Input height={inputHeight} className={inputClasses} placeholderInInput={false} placeholder="Last Name" {...register('lastName')} error={errors.lastName?.message} />
                <div>
                    <PhoneInput
                    inputClass={inputClasses}
                    height={inputHeight}
                        setValueHookForm={setValue}
                        watchHookForm={watch}
                        errors={errors} 
                        name="phone"
                    />
                    <ErrorInput error={errors.phone?.message} />
                </div>
                <Input height={inputHeight} className={inputClasses} placeholderInInput={false} placeholder="Email" {...register('email')} error={errors.email?.message} />
            </div>
            <Input height={inputHeight} className={inputClasses} placeholderInInput={false} placeholder="Subject" {...register('subject')} error={errors.subject?.message} />
            <div>
                <Input className={inputClasses} placeholderInInput={false} rows={6} placeholder="Your Message" isTextarea {...register('message')} error={errors.message?.message} />
            </div>

            <div className='sm:flex grid items-center gap-3 w-full md:justify-start justify-center text-center md:text-left'>
                <Button size='2xl' loading={loading} className='order-2 md:order-1 md:mx-0 mx-auto'>
                    Submit
                </Button>
                <div className='text-slate-500 flex order-1 md:order-2 items-center gap-1.5 text-base text-center md:text-left md:justify-start justify-center'>
                    By submitting, you agree to our <Link className='font-bold underline '>Terms</Link> and <Link className='font-bold underline '>Privacy Policy.</Link>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
