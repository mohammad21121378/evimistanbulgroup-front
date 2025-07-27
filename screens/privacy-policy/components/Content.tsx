import { TranslationFunction } from '@/types/Translation';
import classNames from 'classnames';
import styles from './Content.module.css'

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

                <p className='mt-8'>Welcome to EvimIstanbul Group®. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data in accordance with:</p>

                <ul>
                    <li><span className='font-bold'>KVKK</span> (Türkiye's Personal Data Protection Law)</li>
                    <li><span className='font-bold'>GDPR</span> (European Union)</li>
                    <li><span className='font-bold'>CCPA</span> & other U.S. state-level frameworks (such as CPRA, VCDPA, etc.)</li>
                </ul>

                <p className='mt-8'>By using this website and submitting any form, you expressly agree to this Privacy Policy in its entirety.</p>

                <strong>1. What Data We Collect</strong>

                <p>We do not require registration or user accounts. We only collect the data you voluntarily provide, which may include:</p>

                <ul>
                    <li>Name, email, phone number</li>
                    <li>Preferences related to our services or property interests</li>
                    <li>IP address or general location (if shared automatically or voluntarily)</li>
                    <li>Messages or inquiry forms you submit</li>
                    <li>Browsing behavior through cookies (see Section 8)</li>
                </ul>

                <strong>2. Why We Collect It</strong>

                <p>We collect your data in order to:</p>

                <ul>
                    <li>Respond to your messages and provide consultations</li>
                    <li>Match you with relevant services or property offers</li>
                    <li>Improve user experience and communication quality</li>
                    <li>Comply with regulatory obligations (if applicable)</li>
                    <li>Display personalized content and advertising through third-party ad networks</li>
                </ul>

                <strong>3. Legal Basis for Data Processing</strong>

                <p>We process your data under the following lawful grounds:</p>

                <ul>
                    <li>Consent: When you submit forms voluntarily or accept cookies</li>
                    <li>Legitimate interest: To fulfill your request and maintain our business operations</li>
                    <li>Legal obligation: When required by applicable laws</li>
                </ul>

                <strong>4. Data Sharing & Advertising</strong>

                <p>
                    We do not sell or rent your personal data to third parties.
                    <br />
                    However, our website may include third-party advertising services (e.g., Google Ads, Meta, or others), which may independently collect anonymous data through cookies or similar technologies to display relevant ads based on your interests.
                    You can review and manage ad personalization settings via your browser or the respective ad network’s opt-out tools (like Google’s Ad Settings or NAI).
                </p>

                <strong>5. Data Security</strong>

                <p>
                    We use advanced digital infrastructure, including encrypted servers, firewalls, and access controls, to protect your data.
                    However, no online system is 100% secure, and by using this website, you acknowledge and accept this inherent risk.
                </p>

                <strong>6. Your Rights</strong>

                <p>Depending on your jurisdiction, you may have the right to:</p>
                <ul>
                <li>Request access, correction, or deletion of your data</li>
                <li>Withdraw your consent at any time</li>
                <li>Request data portability (where applicable)</li>
                <li>File a complaint with KVKK, GDPR regulators, or relevant state bodies</li>
                </ul>
                <p>To exercise these rights, contact us at <a href='mailto:help@evimistanbulgroup.com'>help@evimistanbulgroup.com</a></p>

                <strong>7. Cookies & Tracking</strong>

                <p>Our site uses essential, performance, and advertising cookies. These may come from:</p>
                <ul>
                <li>Us (for basic functionality)</li>
                <li>Google or other third parties (for analytics or ads)</li>
                </ul>
                <p>You can disable or customize cookies anytime via your browser settings or opt-out tools like: <br />
                    <a href='https://www.youronlinechoices.com'>https://www.youronlinechoices.com</a></p>

                <strong>8. Disclaimer & Limitation of Liability</strong>
                
                <p>
                All services provided via this website are informational only. Submission of data via forms does not create a client relationship or legal contract.<br />
                Use of this website, forms, tools, and third-party services is entirely at your own risk.<br />
                We are not liable for any loss, damage, data breach, or misuse — direct or indirect — arising from the use of our website, advertisements, or external platforms.<br />
                If you do not accept these terms, please do not use our site or services.
                </p>
                             
                <strong>9. Jurisdiction</strong>

                                <p>
                                This policy is governed by the laws of the Republic of Türkiye. Any disputes shall be resolved by the Istanbul courts.
                                </p>
                
                <strong>10. Changes to this Policy</strong>
                
                <p>We may update this Privacy Policy at any time without prior notice. Continued use of the website constitutes your acceptance of the updated terms.</p>
                
                <strong>11. Contact</strong>

                <p>If you have any questions or concerns, please contact us:</p>
                <ul>
                    <li><a href='mailto:help@evimistanbulgroup.com'>help@evimistanbulgroup.com</a></li>
                    <li><a href='tel:+905348111193'>+90 534 811 11 93</a></li>
                    <li>Ayazağa, Vadi Istanbul Park, Bilişim Vadisi, Kemerburgaz Cd. D:7A, Blok No 7B, Kat 2, 34396 Sarıyer / İstanbul – Türkiye</li>
                </ul>
                
            
                            </div>
        </section>
    )
}
