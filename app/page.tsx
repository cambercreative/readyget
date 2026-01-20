import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready Get
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-4">
            Apps that help you connect and preserve what matters most.
          </p>
          <p className="text-lg text-white/70 max-w-xl">
            We build thoughtful apps that strengthen the bonds between people and help capture the stories that define us.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-primary)]">
            Our Apps
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Postie */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[var(--color-accent)] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-primary)]">Postie</h3>
              <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
                Send real postcards from your phone. Pick a photo, write a message, and we&apos;ll print and mail it anywhere in the world.
              </p>
              <a
                href="https://trypostie.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[var(--color-accent)] font-medium hover:underline"
              >
                Visit trypostie.com
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Fable */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-primary)]">Fable</h3>
              <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
                Capture your life story with AI-powered voice interviews. Our intelligent interviewer remembers your conversations and automatically organizes stories by topic and life phase.
              </p>
              <a
                href="https://tryfable.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[var(--color-accent)] font-medium hover:underline"
              >
                Visit tryfable.com
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-primary)]">
            Our Mission
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            In a world of fleeting digital moments, we believe in creating lasting connections.
            Whether it&apos;s a postcard that arrives in a mailbox or a family story preserved for generations,
            Ready Get builds tools that help you share what truly matters.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-primary)] text-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Ready Get</h4>
              <p className="text-white/70 text-sm">
                Apps that help you connect and preserve what matters most.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://trypostie.com" className="text-white/70 hover:text-white transition-colors">
                    Postie
                  </a>
                </li>
                <li>
                  <a href="https://tryfable.com" className="text-white/70 hover:text-white transition-colors">
                    Fable
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Ready Get. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
