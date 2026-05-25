import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Cookie Policy | Segecha Group Kenya',
  description: 'Learn how Segecha Group uses cookies and similar technologies to improve your experience on our logistics platform.',
  alternates: { canonical: 'https://segecha.com/cookies' },
}

export default function CookiesPage() {
  return (
    <>
      <LegalLayout title="Cookie Policy" lastUpdated="May 15, 2026">
        <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-6">1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">2. How We Use Cookies</h2>
        <p>Segecha Group Ltd uses cookies for several reasons:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Essential Cookies:</strong> Necessary for the website to function, such as security and load balancing.</li>
          <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
          <li><strong>Functional Cookies:</strong> Allow the website to remember choices you make (such as your language or the region you are in).</li>
        </ul>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">3. Types of Cookies We Use</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left p-4 font-outfit font-bold text-navy-900">Type</th>
                <th className="text-left p-4 font-outfit font-bold text-navy-900">Purpose</th>
                <th className="text-left p-4 font-outfit font-bold text-navy-900">Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="p-4 font-medium">Strictly Necessary</td>
                <td className="p-4">Ensures the site works correctly and stays secure.</td>
                <td className="p-4">Session</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 font-medium">Analytics (Google)</td>
                <td className="p-4">Helps us track website traffic and user behavior to improve our services.</td>
                <td className="p-4">Up to 2 years</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-4 font-medium">Functional</td>
                <td className="p-4">Remembers your preferences, such as your quote history or location.</td>
                <td className="p-4">1 year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">4. Third-Party Cookies</h2>
        <p>
          In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Google Analytics:</strong> To help us understand how you use the site and ways that we can improve your experience.</li>
          <li><strong>Mapbox/Google Maps:</strong> Used for our logistics route visualization.</li>
        </ul>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">5. Controlling Cookies</h2>
        <p>
          You can manage or delete cookies as you wish. You can clear all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
        </p>
        <p>
          To learn more about how to manage cookies on your browser, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">aboutcookies.org</a>.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">6. Changes to This Policy</h2>
        <p>
          We may update our Cookie Policy from time to time to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons.
        </p>

        <h2 className="text-2xl font-outfit font-bold text-navy-900 mt-12 mb-6">7. Contact Us</h2>
        <p>
          If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:privacy@segecha.com" className="text-orange-600 hover:underline">privacy@segecha.com</a>.
        </p>
      </LegalLayout>
      <CTABanner dark />
    </>
  )
}
