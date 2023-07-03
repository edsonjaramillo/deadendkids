import { Metadata } from 'next';

import { SEO } from '@/utils/SEO';

export async function generateMetadata(): Promise<Metadata> {
  return SEO.setMetadata({
    title: 'Terms and Conditions',
    description: 'Terms and Conditions for using our services.',
    route: '/terms',
    index: true,
  });
}

export default function Page() {
  return (
    <div className="responsive-sm space-y-10 py-14">
      <h1 className="text-4xl font-bold">Terms and Conditions</h1>
      <p>
        These Terms and Conditions (&quot;Terms&quot;) govern your use of our services. Please read these Terms
        carefully before using our services.
      </p>
      <h2 className="text-3xl font-bold">Acceptance of Terms</h2>
      <p>
        By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of
        these Terms, you may not use our services.
      </p>
      <h2 className="text-3xl font-bold">Use of Services</h2>
      <p>
        You agree to use our services only for lawful purposes and in accordance with these Terms. You must not engage
        in any activity that may interfere with or disrupt the operation of our services.
      </p>
      <h2 className="text-3xl font-bold">Intellectual Property</h2>
      <p>
        All intellectual property rights in our services, including but not limited to trademarks, logos, and content,
        belong to us or our licensors. You may not use, reproduce, or distribute any of our intellectual property
        without our prior written consent.
      </p>
      <h2 className="text-3xl font-bold">User Content</h2>
      <p>
        You are solely responsible for any content you submit or contribute to our services. By submitting content, you
        grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute the content
        for the purpose of providing our services.
      </p>
      <h2 className="text-3xl font-bold">Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, we shall not be liable for any direct, indirect, incidental,
        consequential, or exemplary damages arising out of or in connection with the use of our services. This includes
        but is not limited to damages for loss of profits, data, or other intangible losses.
      </p>
      <h2 className="text-3xl font-bold">Third-Party Links</h2>
      <p>
        Our services may contain links to third-party websites or services that are not owned or controlled by us. We
        have no control over and assume no responsibility for the content, privacy policies, or practices of any
        third-party websites or services. You access and use such websites or services at your own risk.
      </p>
      <h2 className="text-3xl font-bold">Modification of Terms</h2>
      <p>
        We reserve the right to modify or update these Terms at any time without prior notice. It is your responsibility
        to review these Terms periodically for any changes. By continuing to use our services after the modifications,
        you agree to be bound by the updated Terms.
      </p>
      <h2 className="text-3xl font-bold">Termination</h2>
      <p>
        We may terminate or suspend your access to our services immediately, without prior notice or liability, for any
        reason whatsoever, including but not limited to a breach of these Terms.
      </p>
      <h2 className="text-3xl font-bold">Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any legal action
        or proceeding arising out of or relating to these Terms shall be exclusively brought in the courts of
        [Jurisdiction].
      </p>
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p>If you have any questions or concerns about these Terms, please contact us at [email address].</p>
    </div>
  );
}
