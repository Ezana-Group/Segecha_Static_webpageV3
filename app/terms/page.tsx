import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Terms of Service | Segecha Group Kenya',
  description: 'Terms and Conditions for using Segecha Group logistics services and website. Governing law: Republic of Kenya.',
  alternates: { canonical: 'https://segecha.com/terms' },
}

export default function TermsPage() {
  return (
    <>
      <LegalLayout title="Terms of Service" lastUpdated="May 15, 2026">
        <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-6">1. Agreement to Terms</h2>
        <p>
          By accessing the website at <a href="https://segecha.com" className="text-orange-600 hover:underline">segecha.com</a> or by engaging the services of Segecha Group Ltd, you agree to be bound by these Terms of Service, all applicable laws and regulations in the Republic of Kenya, and agree that you are responsible for compliance with any applicable local laws.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">2. Services Provided</h2>
        <p>
          Segecha Group Ltd provides logistics and freight services, including but not limited to long-haul freight, cross-border transport, fleet management, and warehousing within East Africa. All services are subject to specific Carriage Contracts and Bill of Lading terms which prevail in the event of any conflict with these website terms.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">3. User Obligations</h2>
        <p>As a user of our website and services, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Provide accurate and complete information when requesting quotes or booking shipments.</li>
          <li>Ensure that all cargo provided for transport is legally compliant and correctly documented.</li>
          <li>Not use our website for any fraudulent or unlawful activity.</li>
        </ul>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">4. Intellectual Property</h2>
        <p>
          The content, logos, designs, and software on this website are the intellectual property of Segecha Group Ltd and are protected by applicable copyright and trademark law in Kenya and internationally.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">5. Limitation of Liability</h2>
        <p>
          In no event shall Segecha Group Ltd or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Segecha Group Ltd's website, even if Segecha Group Ltd or a Segecha Group Ltd authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">6. Accuracy of Materials</h2>
        <p>
          The materials appearing on Segecha Group Ltd's website could include technical, typographical, or photographic errors. Segecha Group Ltd does not warrant that any of the materials on its website are accurate, complete or current. Segecha Group Ltd may make changes to the materials contained on its website at any time without notice.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">7. Links</h2>
        <p>
          Segecha Group Ltd has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Segecha Group Ltd of the site. Use of any such linked website is at the user's own risk.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">8. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the <strong>Republic of Kenya</strong> and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">9. Modifications</h2>
        <p>
          Segecha Group Ltd may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">10. Contact Information</h2>
        <p>
          If you have any questions regarding these Terms of Service, please contact us at <a href="mailto:legal@segecha.com" className="text-orange-600 hover:underline">legal@segecha.com</a>.
        </p>
      </LegalLayout>
      <CTABanner dark />
    </>
  )
}
