import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Privacy Policy | Segecha Group Kenya',
  description: 'Segecha Group Privacy Policy. Learn how we collect, use, and protect your personal data in compliance with Kenya Data Protection Act 2019 and GDPR.',
  alternates: { canonical: 'https://segecha.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <LegalLayout title="Privacy Policy" lastUpdated="May 15, 2026">
        <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-6">1. Introduction</h2>
        <p>
          Segecha Group Ltd ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (segecha.com) and use our logistics services.
        </p>
        <p>
          We operate in compliance with the <strong>Kenya Data Protection Act, 2019</strong> and, where applicable, the <strong>General Data Protection Regulation (GDPR)</strong>.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">2. Data Controller</h2>
        <p>
          For the purposes of the Data Protection Act, Segecha Group Ltd is the data controller. Our registered office is located at:
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
          <p className="font-bold text-navy-900 mb-1">Segecha Group Ltd</p>
          <p>Mombasa Port, Shed 12, Port Reitz Road</p>
          <p>Mombasa, Kenya</p>
          <p>Email: <a href="mailto:privacy@segecha.com" className="text-orange-600 hover:underline">privacy@segecha.com</a></p>
        </div>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">3. Information We Collect</h2>
        <h3 className="text-xl font-outfit font-bold text-navy-900 mt-8 mb-4">3.1 Information You Provide to Us</h3>
        <p>We collect information that you voluntarily provide when you request a quote, contact us, or engage our services. This includes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Contact Data:</strong> Name, email address, phone number, and physical address.</li>
          <li><strong>Business Data:</strong> Company name, registration details, and industry.</li>
          <li><strong>Transaction Data:</strong> Cargo details, pickup/delivery locations, and payment information.</li>
        </ul>

        <h3 className="text-xl font-outfit font-bold text-navy-900 mt-8 mb-4">3.2 Information Collected Automatically</h3>
        <p>When you visit our website, we may automatically collect certain information about your device and usage, including your IP address, browser type, and pages viewed, via cookies and similar technologies.</p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">4. How We Use Your Information</h2>
        <p>We use your personal data for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>To provide and manage our logistics services.</li>
          <li>To process quotes and service requests.</li>
          <li>To communicate with you regarding your shipments.</li>
          <li>To comply with legal and regulatory requirements (e.g., KRA customs regulations).</li>
          <li>To improve our website and service offerings.</li>
        </ul>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">5. Legal Basis for Processing</h2>
        <p>Under the Kenya Data Protection Act and GDPR, we process data based on:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Contractual Necessity:</strong> To fulfill our service agreement with you.</li>
          <li><strong>Legal Obligation:</strong> To comply with Kenyan and regional transport laws.</li>
          <li><strong>Legitimate Interests:</strong> To operate and grow our business securely.</li>
          <li><strong>Consent:</strong> Where you have explicitly agreed to receive marketing communications.</li>
        </ul>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">6. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal data. We may share your information with:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Service Providers:</strong> Third-party partners who assist in transport, tracking, or IT support.</li>
          <li><strong>Regulatory Authorities:</strong> Such as the Kenya Revenue Authority (KRA) or customs officials in Uganda, Tanzania, Rwanda, and Burundi.</li>
          <li><strong>Professional Advisors:</strong> Lawyers, auditors, and insurers.</li>
        </ul>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">7. Cross-Border Data Transfers</h2>
        <p>
          As a regional logistics provider, your data may be transferred to and processed in countries within the East African Community (EAC). We ensure that such transfers comply with the Data Protection Act by implementing appropriate safeguards.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">8. Your Data Protection Rights</h2>
        <p>Under Kenyan law and GDPR, you have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
          <li><strong>Erasure:</strong> Request deletion of your data under certain conditions.</li>
          <li><strong>Objection:</strong> Object to the processing of your data for specific purposes.</li>
          <li><strong>Portability:</strong> Request transfer of your data to another organisation.</li>
        </ul>


        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">9. Data Retention</h2>
        <p>
          We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or wish to exercise your rights, please contact our Data Protection Officer at <a href="mailto:privacy@segecha.com" className="text-orange-600 hover:underline">privacy@segecha.com</a>.
        </p>
      </LegalLayout>
      <CTABanner dark />
    </>
  )
}
