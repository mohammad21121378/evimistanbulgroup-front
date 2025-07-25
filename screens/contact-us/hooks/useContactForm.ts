import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema, ContactFormValues } from '../contact.schema';
import { useState } from 'react';

export const useContactForm = () => {

    const [loading, setLoading] = useState(false)
    const [successfulResult, setSuccessfulResult ] = useState(false)

  const methods = useForm<ContactFormValues>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
      setLoading(true);

      setLoading(true)
      await addFormEntrance(data, "contact-us", setSuccessfulResult)
      setLoading(false)

  };

  return { methods, onSubmit, loading, successfulResult };
};
