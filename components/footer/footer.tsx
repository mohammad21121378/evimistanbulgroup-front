'use client'

import Image from 'next/image'
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaLinkedinIn, FaGoogle, FaTelegramPlane } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Button from '../ui/Button'
import { useConsultationStore } from '@/stores/consultationStore'
import Link from '../ui/Link'
import SocialMedia from './SocialMedia'

export default function Footer() {

  const { onOpen } = useConsultationStore();
  const links = [
    { label: "Properties", href: `/properties-for-sale-in-turkey` },
    { label: "Our Services", href: `/our-services` },
    { label: "Our Insights", href: `/our-insights` },
    { label: "About Us", href: `/about` },
    { label: "Client Stories", href: `/client-stories` },
    { label: "Contact Us", href: `/contact-us` },
  ];
  const legalLinks = [
    { label: 'Legal & Corporate', href: `/legal-and-corporate` },
    { label: 'Terms & Conditions', href: `/terms-and-conditions` },
    { label: 'Privacy Policy', href: `/privacy-policy` },
    { label: 'FAQs', href: `/faqs` },
  ]

  return (
    <footer className="bg-orange-700 text-white text-sm mt-20">
      <div className="container py-10">

        <div className="flex flex-col md:flex-row md:justify-between justify-center items-start md:items-center gap-x-6 gap-y-8">

          <div className="flex md:justify-between justify-center md:w-auto w-full items-center gap-6">

            <Image src="/images/EvimIstanbul LOGO Official With Border.webp" alt="logo" width={140} height={140} className="!size-36" />

            <div className="text-left">
              <p className="xl:text-3xl text-2xl font-semibold leading-snug">
                From Dreams to Deeds,<br />
                From Keys to Citizenship!
              </p>
            </div>

          </div>

          <Button onClick={onOpen} size='2xl' color='white' outline className='md:mx-0 mx-auto'>
            Book A Free Consultation
          </Button>
        </div>

        <nav className="flex flex-wrap justify-end gap-6 mt-8 font-medium">
          {links.map((link, idx) => (
            <Link key={idx} href={link.href} className="hover:underline transition-all duration-300 text-lg">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="h-px bg-white my-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">

          <div className="text-base md:text-left text-center">
            <p className="mb-1">
              Bilişim Vadisi İstanbul, 7A Office Block, Floor 2,<br />
              Kemerburgaz Caddesi NO 7, Ayazağa Mahallesi, Istanbul, Turkey
            </p>
            <a href='+905348111193' className="mt-6 block hover:underline ">+90 (534) 811 11 93</a>
            <a href='contact@evimistanbulgroup.com' className="mt-px block hover:underline ">contact@evimistanbulgroup.com</a>
          </div>

          <div className="text-base max-w-2xl md:text-left text-center">
            <strong className="text-white text-base">EvimIstanbul Group®</strong> is an AI-powered international platform offering trusted real estate, investment, legal residency, and lifestyle solutions in Turkey. From citizenship and property services to medical tourism and business setup, we connect you to the opportunities that matter — securely, transparently, and with expert care.
          </div>
        </div>

        <div className="lg:mt-6 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 gap-y-8 items-center ">
 
          <SocialMedia />

          <div className="sm:flex grid grid-cols-2 items-center gap-4 w-full lg:justify-start justify-center">
            <Image src="/images/documents/ISO 27001 Information Security Light.webp" className='mx-auto sm:mx-0 md:-ml-6' alt="ISO 27001 Information Security | Evimistanbul Group" width={102} height={72} objectFit='cover' objectPosition='center' />
            <Image src="/images/documents/Iso 15504 Light.webp" className='mx-auto sm:mx-0' alt="Iso 15504 | Evimistanbul Group" width={72} height={72} objectFit='cover' objectPosition='center' />
            <Image src="/images/documents/Iso 10002 Light.webp" className=' sm:mx-2.5 mx-auto' alt="ISO 10002 | Evimistanbul Group" width={160} height={72} objectFit='cover' objectPosition='center' />
            <Image src="/images/documents/Bilisim Vadisi Light.webp" className='mx-auto sm:mx-0' alt="Bilisim Vadisi | Evimistanbul Group" width={125} height={72} objectFit='cover' objectPosition='center' />
          </div>

        </div>

        <div className="h-px bg-white my-6" />

        <div className="grid md:grid-cols-2 grid-cols-1 md:justify-between justify-center md:text-left text-center items-center text-base text-white gap-3">
          <p className='md:order-1 order-2'>© 2025 EvimIstanbul Group® | All rights reserved.</p>
          <div className="flex gap-4 h-full md:justify-end justify-center items-center md:order-2 order-1">
            {legalLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className="hover:underline transition-all duration-300 text-base">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
