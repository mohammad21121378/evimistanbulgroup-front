'use client';

import SuccessAlert from '@/components/ui/SuccessAlert';
import { useContactForm } from '../hooks/useContactForm';
import ContactForm from './ContactForm';
import { Heading } from '@/components/typography';
import { AnimatePresence, motion } from 'framer-motion'

export default function RequestContact() {

  const {
    methods,
    onSubmit,
    loading,
    successfulResult
  } = useContactForm();

  return (
    <div className='container'>

      <section className='section !pt-0'>
        <Heading type='heading-4' className='mb-5 mt-8'>
        Contact Form
        </Heading>
        <AnimatePresence>
          {
            successfulResult && (
              <motion.div
                key="success"
                initial={{ opacity: 0, x: -200, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.85 }}
                transition={{ duration: 0.4, delay:.4 }}
              >
                <SuccessAlert
                  message="Your message has been successfully received. Our team will get back to you as soon as possible — typically within 24 hours."
                />
              </motion.div>
            )
          }
 
          {
            !successfulResult && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 200, scale: 0.85 }}
                transition={{ duration: 0.4 }}
              >
                <ContactForm methods={methods} loading={loading} onSubmit={onSubmit} />
              </motion.div>
            )
          }
        </AnimatePresence>
      </section>

    </div>
  );
};


