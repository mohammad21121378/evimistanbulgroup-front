'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaLinkedinIn, FaGoogle, FaTelegramPlane } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="bg-[rgb(194,68,14)] text-white text-sm mt-20">
      <div className="container py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo and Title */}
          <div className="flex items-start gap-6">
            <Image src="/images/EvimIstanbul LOGO Official.PNG" alt="logo" width={100} height={100} className="min-w-[100px]" />
            <div className="text-left mt-2">
              <h2 className="text-xl font-semibold leading-tight">
                From Dreams to Deeds,<br />
                From Keys to Citizenship!
              </h2>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="#"
            className="mt-4 md:mt-0 inline-block border border-white rounded-lg px-6 py-3 font-semibold text-white hover:bg-white hover:text-[#C2440E] transition"
          >
            Book A Free Consultation
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 font-medium">
          {["Properties", "Our Services", "Our Insights", "About Us", "Client Stories", "Contact Us"].map((item, idx) => (
            <Link key={idx} href="#" className="hover:underline">
              {item}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px bg-white/30 my-6" />

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 text-white/90">
          {/* Contact Info */}
          <div className="text-sm">
            <p className="mb-1">Bilişim Vadisi İstanbul, 7A Office Block, Floor 2,<br />
              Kemerburgaz Caddesi NO 7, Ayazağa Mahallesi, Istanbul, Turkey</p>
            <p className="mt-2">+90 (534) 811 11 93</p>
            <p>contact@evimistanbulgroup.com</p>
          </div>

          {/* Description */}
          <div className="text-sm max-w-2xl">
            <strong className="text-white">EvimIstanbul Group®</strong> Is An AI-Powered International Platform Offering Trusted Real Estate,
            Investment, Legal Residency, And Lifestyle Solutions In Turkey. From Citizenship And
            Property Services To Medical Tourism And Business Setup, We Connect You To The
            Opportunities That Matter — Securely, Transparently, And With Expert Care.
          </div>
        </div>

        {/* Social + Logos */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-5 text-xl text-white">
            <FaInstagram />
            <FaFacebookF />
            <FaTiktok />
            <HiOutlineMail />
            <FaLinkedinIn />
            <FaGoogle />
            <FaTelegramPlane />
          </div>

          <div className="flex items-center gap-4">
            <Image src="/images/documents/ISO 27001 Information Security.webp" alt="ISO 27001 Information Security | Evimistanbul Group" width={50} height={50} />
            <Image src="/images/documents/Iso 15504.webp" alt="Iso 15504 | Evimistanbul Group" width={50} height={50} />
            <Image src="/images/documents/Iso 10002.webp" alt="ISO 10002 | Evimistanbul Group" width={50} height={50} />
            <Image src="/images/documents/Bilisim Vadisi.webp" alt="Bilisim Vadisi | Evimistanbul Group" width={70} height={50} />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/30 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/80 gap-3">
          <p>© 2025 EvimIstanbul Group® | All rights reserved.</p>
          <div className="flex gap-4">
            {["Legal & Corporate", "Terms & Conditions", "Privacy Policy", "FAQs"].map((item, idx) => (
              <Link key={idx} href="#" className="hover:underline">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
