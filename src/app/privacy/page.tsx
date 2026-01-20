import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Ready Get",
  description: "Privacy policy for Ready Get and our products.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: January 2026
          </p>

          <h2>Introduction</h2>
          <p>
            Ready Get (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our applications and services, including
            Postie and Fable.
          </p>

          <h2>Information We Collect</h2>

          <h3>Information You Provide</h3>
          <ul>
            <li>
              <strong>Account Information:</strong> When you create an account, we collect
              your name, email address, and other contact information.
            </li>
            <li>
              <strong>Content:</strong> Photos, messages, and other content you create or
              upload through our services.
            </li>
            <li>
              <strong>Payment Information:</strong> When you make purchases, our payment
              processors collect payment card information.
            </li>
            <li>
              <strong>Communications:</strong> Information you provide when you contact us
              for support or feedback.
            </li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Device Information:</strong> Device type, operating system, and
              unique device identifiers.
            </li>
            <li>
              <strong>Usage Data:</strong> How you interact with our services, including
              features used and time spent.
            </li>
            <li>
              <strong>Log Data:</strong> IP address, browser type, and access times.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, investigate, and prevent fraudulent or unauthorized activity</li>
          </ul>

          <h2>Sharing of Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> With vendors who perform services on our
              behalf, such as printing and mailing postcards.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to protect our
              rights and safety.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger, acquisition,
              or sale of assets.
            </li>
            <li>
              <strong>With Your Consent:</strong> When you direct us to share information
              with third parties.
            </li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain your information for as long as your account is active or as needed
            to provide you services. You may request deletion of your account and associated
            data at any time.
          </p>

          <h2>Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your
            personal information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to or restrict processing of your information</li>
            <li>Request portability of your information</li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our services are not intended for children under 13. We do not knowingly collect
            personal information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            changes by posting the new policy on this page and updating the &quot;Last updated&quot;
            date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@readyget.app">privacy@readyget.app</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
