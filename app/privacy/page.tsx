import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Ready Get',
  description: 'Privacy policy for Ready Get and its products including Postie and Fable.',
}

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-primary)]">Privacy Policy</h1>

        <div className="prose prose-lg text-[var(--color-text)] space-y-6">
          <p className="text-[var(--color-text-muted)]">
            <strong>Last updated:</strong> January 2026
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">Overview</h2>
            <p>
              Ready Get (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates readyget.app and its related products including Postie and Fable. This Privacy Policy describes how we collect, use, and protect your personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> Email address, name, and password when you create an account.</li>
              <li><strong>Content:</strong> Photos, messages, and voice recordings you create using our apps.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our services.</li>
              <li><strong>Device Information:</strong> Device type, operating system, and unique identifiers.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our services</li>
              <li>Process and deliver postcards (Postie)</li>
              <li>Generate and organize your stories (Fable)</li>
              <li>Communicate with you about your account and updates</li>
              <li>Ensure the security and integrity of our services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third parties who help us operate our services (e.g., printing partners for Postie).</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at privacy@readyget.app.
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
