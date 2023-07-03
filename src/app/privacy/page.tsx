import { Metadata } from 'next';

import { SEO } from '@/utils/SEO';

export async function generateMetadata(): Promise<Metadata> {
  return SEO.setMetadata({
    title: 'Privacy Policy',
    description: 'Privacy Policy for using our services.',
    route: '/privacy',
    index: true,
  });
}

export default function PrivacyPage() {
  return (
    <div className="responsive-sm space-y-10 py-14">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p>
        This Privacy Policy describes how we collect, use, and disclose your personal information when you use our
        services.
      </p>
      <h2 className="text-3xl font-bold">Information We Collect</h2>
      <ul className="list-disc list-inside text-base-200">
        <li className="text-base text-base-200">
          <p>
            <strong>Personal Information:</strong> We may collect certain personally identifiable information, such as
            your name, email address, and phone number when you voluntarily provide it to us.
          </p>
        </li>
        <li className="text-base text-base-200">
          <p>
            <strong>Usage Information:</strong> We may collect information about how you interact with our services,
            including your IP address, device information, and browsing activity.
          </p>
        </li>
      </ul>
      <h2 className="text-3xl font-bold">Use of Information</h2>
      <p>We may use the collected information for the following purposes:</p>
      <ul className="list-disc list-inside text-base-200">
        <li className="text-base text-base-200">To provide and maintain our services to you.</li>
        <li className="text-base text-base-200">To personalize your experience and improve our services.</li>
        <li className="text-base text-base-200">To communicate with you, respond to inquiries, and provide support.</li>
        <li className="text-base text-base-200">
          To send you promotional emails, newsletters, or other marketing communications (you can unsubscribe at any
          time).
        </li>
        <li className="text-base text-base-200">
          To enforce our terms of service and protect the security of our services.
        </li>
      </ul>
      <h2 className="text-3xl font-bold">Disclosure of Information</h2>
      <p>We may disclose your personal information to third parties in the following circumstances:</p>
      <ul className="list-disc list-inside text-base-200">
        <li className="text-base text-base-200">
          With your consent or as necessary to fulfill the purpose for which the information was provided.
        </li>
        <li className="text-base text-base-200">
          To trusted third-party service providers who help us operate and improve our services.
        </li>
        <li className="text-base text-base-200">
          In response to a legal request, such as a court order or government investigation.
        </li>
        <li className="text-base text-base-200">
          To protect the rights, property, or safety of our company, users, or the public.
        </li>
      </ul>
      <h2 className="text-3xl font-bold">Data Security</h2>
      <p>
        We implement reasonable security measures to protect your personal information from unauthorized access,
        disclosure, or alteration. However, please note that no method of transmission over the internet or electronic
        storage is completely secure.
      </p>
      <h2 className="text-3xl font-bold">Data Retention</h2>
      <p>
        We will retain your personal information for as long as necessary to fulfill the purposes outlined in this
        privacy policy, unless a longer retention period is required or permitted by law.
      </p>
      <h2 className="text-3xl font-bold">Your Rights</h2>
      <p>
        You have the right to access, update, or delete the personal information we hold about you. If you would like to
        exercise these rights, please contact us using the information provided below.
      </p>
      <h2 className="text-3xl font-bold">Changes to this Privacy Policy</h2>
      <p>
        We may update this privacy policy from time to time. The most current version will always be posted on our
        website. We encourage you to review this policy periodically for any changes.
      </p>
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
        <a className="text-base text-primary-500 underline" href="mailto:contact@deadendkidsmusic.com">
          contact@deadendkidsmusic.com
        </a>
      </p>
    </div>
  );
}
