'use client';

import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb';
import OfficeCard from './OfficeCard';
import { Heading } from '@/components/typography';
import Button from '@/components/ui/Button';
import { useConsultationStore } from '@/stores/consultationStore';

export default function Hero() {

  const offices = [
    {
      title: 'EvimIstanbul Group Sarıyer ',
      subtitle: 'VADI ISTANBUL OFFICE',
      address: 'Ayazağa, Kemerburgaz Cd. D:7A Ofis, Bilişim Vadisi, Kat 2, 34475 Sarıyer/İstanbul',
      phone: '+90 (552) 674 11 11',
      email: 'sariyer@evimistanbulgroup.com',
      mapSrc: 'https://maps.google.com/maps?q=Vadi%20Istanbul&t=&z=13&ie=UTF8&iwloc=&output=embed',
    },
    {
      title: 'EvimIstanbul Group Esenyurt',
      subtitle: 'Burç istanbul OFFICE',
      address: 'Hadımköy kavşağı, E-5 karayolu üzeri, Gökevler, 2312 Sk. 18. Blok, 34522 Esenyurt/İstanbul',
      phone: '+90 (552) 674 11 13',
      email: 'esenyurt@evimistanbulgroup.com',
      mapSrc: 'https://maps.google.com/maps?q=Esenyurt&t=&z=13&ie=UTF8&iwloc=&output=embed',
    },
  ];

  return (
    <div className='container'>

      <section className='section pt-36 pb-0'>

        <Breadcrumb
          items={[{ label: 'Contact Us' }]}
        />

        <Heading type='heading-4' className='mb-5 mt-8'>
          Our Offices
        </Heading>

        {offices.map((office, i) => (
          <OfficeCard key={i} {...office} isReverse={i % 2 !== 0} />
        ))}
      </section>

    </div>
  );
};


