import { TranslationFunction } from '@/types/Translation';
import classNames from 'classnames';
import styles from './Content.module.css'
import Link from '@/components/ui/Link';

type Props = {
    t: TranslationFunction
}

export default function Content({ t }: Props) {

    return (
        <section className={classNames('section', styles.warpper)} >
            <div className={classNames('container')}>

                <strong className='!mt-0'>
                    Effective Date: 01.08.2025
                </strong>

                <p className='my-8'>Platform: EvimIstanbul Group® – www.evimistanbulgroup.com and all affiliated online/offline services and platforms.</p>

                <p>Welcome to the EvimIstanbul Group website. By accessing or using this website, our forms, services, or any of our affiliated platforms (collectively referred to as “the Site”), you agree to be legally bound by the following terms and conditions. If you do not agree with these Terms, you must not use this website or any of our services.</p>

                <strong>1. Use of the Site</strong>
                <p>The Site is provided for informational, consultation, and marketing purposes only. By using the Site:</p>
                <ul>
                    <li>You confirm that you are at least 18 years old or using the Site with the supervision of a legal guardian.</li>
                    <li>You agree not to use the Site for any unlawful, fraudulent, or abusive purpose.</li>
                    <li>You understand that using the Site does not create any legal, professional, or contractual relationship unless otherwise explicitly stated and signed.</li>
                </ul>

                <strong>2. No Guarantee of Results</strong>
                <p>All real estate, legal, immigration, investment, education, and consultation services promoted or discussed on this website are subject to change based on legal frameworks, market conditions, government policy, or personal circumstances. We do not guarantee results, visa approvals, sales closings, or outcomes of any kind.</p>

                <strong>3. Intellectual Property</strong>
                <p>All content on this website—including text, visuals, design, logos, branding, and software—is the exclusive property of EvimIstanbul Group® or its licensed partners.</p>
                <ul><li>Unauthorized copying, distribution, or reproduction of any material from this site is strictly prohibited and may result in legal action.</li></ul>

                <strong>4. Limitation of Liability</strong>
                <p>You agree that:</p>
                <ul>
                    <li>Use of this site is entirely at your own risk.</li>
                    <li>We do not accept liability for any direct, indirect, incidental, or consequential loss, damage, or delays—financial or otherwise—arising from use of this website or reliance on any information presented.</li>
                    <li>Submitting a form does not constitute a formal business, consultancy, legal, or fiduciary relationship. It is purely an inquiry.</li>
                </ul>

                <strong>5. Third-Party Services & Advertisements</strong>
                <p>The Site may include links to third-party platforms or display third-party advertisements (e.g., Google Ads). We are not responsible for the content, data practices, or business conduct of such external services.
                    By using this site, you agree that any transaction or engagement with a third party is at your own discretion and risk.</p>

                <strong>6. Jurisdiction & Legal Governance</strong>
                <p>
                    These Terms are governed by the laws of the Republic of Türkiye. Any disputes shall be handled exclusively under the jurisdiction of the Istanbul Courts.
                </p>
                <p>
                    International users must comply with local laws and bear full responsibility for doing so. Nothing on this site constitutes legal advice under U.S., EU, Gulf, or other foreign jurisdictions.
                </p>

                <strong>7. Privacy & Data Handling</strong>
                <p>Use of this website is also subject to our <Link href="/privacy-policy" className='text-orange-500 font-bold underline hover:text-orange-700'>Privacy Policy</Link>, which outlines how we handle your data in accordance with KVKK, GDPR, and CCPA/US-based frameworks. Submitting any form or message confirms your consent to that policy.</p>
                <p>We are not responsible for third-party data interception, breaches, or unauthorized disclosures beyond our control.</p>

                <strong>8. Amendments & Updates</strong>
                <p>We reserve the right to modify these Terms at any time without prior notice. You are responsible for reviewing them periodically. Continued use of the website signifies your acceptance of the updated Terms.</p>

                <strong>9. Contact Information</strong>
                <p>For any questions regarding these Terms, please contact us:</p>
                <ul>
                    <li><a href='mailto:help@evimistanbulgroup.com'>help@evimistanbulgroup.com</a></li>
                    <li><a href='tel:+905348111193'>+90 534 811 11 93</a></li>
                    <li>Ayazağa, Vadi Istanbul Park, Bilişim Vadisi, Kemerburgaz Cd. D:7A, Blok No 7B, Kat 2, 34396 Sarıyer / İstanbul – Türkiye</li>
                </ul>

                <p className='uppercase font-medium mt-8'>
                    <span className='font-bold '>NOTICE: </span> USE OF THIS SITE AND ITS SERVICES IS AT YOUR OWN RISK. IF YOU DO NOT AGREE WITH THESE TERMS, PLEASE IMMEDIATELY EXIT THE SITE AND REFRAIN FROM ANY USE.
                </p>

            </div>
        </section>
    )
}
