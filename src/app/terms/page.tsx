import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Ready Get",
  description: "Terms of service for Ready Get and our products.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1>Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: January 2026
          </p>

          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using Ready Get&apos;s services, including Postie and Fable,
            you agree to be bound by these Terms of Service. If you do not agree to
            these terms, please do not use our services.
          </p>

          <h2>Description of Services</h2>
          <p>Ready Get provides the following services:</p>
          <ul>
            <li>
              <strong>Postie:</strong> A mobile application that allows users to create
              and send physical postcards from digital photos.
            </li>
            <li>
              <strong>Fable:</strong> A mobile application that uses AI to conduct voice
              interviews and organize personal stories into a memoir format.
            </li>
          </ul>

          <h2>Account Registration</h2>
          <p>
            To use certain features of our services, you must register for an account.
            You agree to:
          </p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Promptly update any changes to your information</li>
            <li>Accept responsibility for all activities under your account</li>
          </ul>

          <h2>Acceptable Use</h2>
          <p>You agree not to use our services to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Send harassing, threatening, or offensive content</li>
            <li>Distribute malware or engage in harmful activities</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use the service for any illegal or unauthorized purpose</li>
          </ul>

          <h2>Content Ownership</h2>
          <p>
            <strong>Your Content:</strong> You retain ownership of all content you create
            or upload through our services. By using our services, you grant us a license
            to use, store, and process your content solely to provide the services to you.
          </p>
          <p>
            <strong>Our Content:</strong> All other content, including our branding,
            designs, and software, remains the property of Ready Get and is protected
            by intellectual property laws.
          </p>

          <h2>Payments and Refunds</h2>
          <p>
            Certain services require payment. By making a purchase, you agree to pay
            the specified fees. All payments are processed through secure third-party
            payment processors.
          </p>
          <p>
            <strong>Postie:</strong> Once a postcard order is submitted for printing,
            it cannot be canceled. Refunds may be issued for postcards that are not
            delivered due to our error.
          </p>
          <p>
            <strong>Subscriptions:</strong> If applicable, subscriptions will automatically
            renew unless canceled before the renewal date.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties
            of any kind, either express or implied. We do not guarantee that our services
            will be uninterrupted, error-free, or secure.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Ready Get shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages arising
            from your use of our services.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Ready Get and its officers, directors,
            employees, and agents from any claims, damages, or expenses arising from your
            use of our services or violation of these terms.
          </p>

          <h2>Termination</h2>
          <p>
            We may suspend or terminate your access to our services at any time for any
            reason, including violation of these terms. You may also terminate your account
            at any time by contacting us.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may modify these terms at any time. We will notify you of material changes
            by posting the updated terms and updating the &quot;Last updated&quot; date. Your
            continued use of our services after changes constitutes acceptance of the
            new terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws
            of the State of California, without regard to its conflict of law provisions.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:legal@readyget.app">legal@readyget.app</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
