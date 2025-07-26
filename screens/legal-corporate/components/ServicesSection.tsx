'use client'

import { ServiceCard } from './ServiceCard';
import { servicesData } from '../constants';
import { useConsultationStore } from '@/stores/consultationStore';
import Button from '@/components/ui/Button';

export const ServicesSection = () => {
  const { onOpen } = useConsultationStore()
  return (
    <section className='section !pb-3'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 ">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} title={service.title} href={service.href} />
          ))}
          <Button onClick={onOpen} size='full' outline gradient={false} className='sm:col-span-2 text-lg py-4 h-auto'>
            Book A Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
