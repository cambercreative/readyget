import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Ready Get',
  description: 'Terms of service for Ready Get and its products including Postie and Fable.',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[var(--color-warm)]">
      {/* Header */}
      <header className="bg-[var(--color-primary)] text-white py-6">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm">
            &larr; Back to Ready Get
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-primary)]">Terms of Service</h1>

        <div className="prose prose-lg text-[var(--color-text)] space-y-6">
          <p className="text-[var(--color-text-muted)]">
            <strong>Last updated:</strong> January 2026
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">Acceptance of Terms</h2>
            <p>
              By accessing or using services provided by Ready Get, including Postie and Fable, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">Description of Services</h2>
            <p>
              Ready Get provides mobile and web applications designed to help users connect and preserve meaningful moments:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Postie:</strong> A service that allows users to send physical postcards from their mobile device.</li>
              <li><strong>Fable:</strong> An AI-powered service for capturing and organizing personal life stories through voice interviews.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">User Accounts</h2>
            <p>
              To use certain features of our services, you may need to create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">User Content</h2>
            <p>
              You retain ownership of content you create using our services. By using our services, you grant us a license to use your content solely for the purpose of providing the service (e.g., printing and mailing postcards, processing voice recordings).
            </p>
            <p>You agree not to submit content that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violates any applicable law</li>
              <li>Infringes on intellectual property rights</li>
              <li>Contains harmful, threatening, or harassing material</li>
              <li>Contains malware or other harmful code</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">Payment Terms</h2>
            <p>
              Certain services require payment. All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing with reasonable notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Ready Get shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">Termination</h2>
            <p>
              We may terminate or suspend your access to our services at any time, with or without cause. Upon termination, your right to use the services will immediately cease.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at legal@readyget.app.
            </p>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[var(--color-primary)] text-white py-8">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Ready Get. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
