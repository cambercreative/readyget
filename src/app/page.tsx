import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold">Ready Get</span>
          <div className="flex gap-6">
            <a href="#postie" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Postie</a>
            <a href="#fable" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Fable</a>
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Apps That Connect People
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            Ready Get builds thoughtful apps that help you share moments and stay connected with the people who matter most.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#postie"
              className="px-6 py-3 bg-[var(--postie-coral)] hover:bg-[var(--postie-coral-dark)] text-white rounded-full font-medium transition-colors"
            >
              Discover Postie
            </a>
            <a
              href="#fable"
              className="px-6 py-3 bg-[var(--fable-purple)] hover:bg-[var(--fable-purple-dark)] text-white rounded-full font-medium transition-colors"
            >
              Discover Fable
            </a>
          </div>
        </div>
      </section>

      {/* Postie Section */}
      <section id="postie" className="py-24 px-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[var(--postie-coral)]/10 text-[var(--postie-coral)] rounded-full text-sm font-medium mb-4">
                Postie
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Send Real Postcards From Your Phone
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                Turn your favorite photos into real, physical postcards delivered anywhere in the world. No stamps, no trips to the post office—just pure joy in their mailbox.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--postie-coral)]/20 flex items-center justify-center text-[var(--postie-coral)]">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Choose any photo from your camera roll</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--postie-coral)]/20 flex items-center justify-center text-[var(--postie-coral)]">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Write a personal message</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--postie-coral)]/20 flex items-center justify-center text-[var(--postie-coral)]">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">We print and mail it for you</span>
                </li>
              </ul>
              <Link
                href="https://trypostie.com"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--postie-coral)] hover:bg-[var(--postie-coral-dark)] text-white rounded-full font-medium transition-colors"
              >
                Visit trypostie.com
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[var(--postie-coral)] to-orange-400 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-8xl mb-4">📮</div>
                  <p className="text-2xl font-semibold">Postie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fable Section */}
      <section id="fable" className="py-24 px-6 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square bg-gradient-to-br from-[var(--fable-purple)] to-indigo-400 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-8xl mb-4">📖</div>
                  <p className="text-2xl font-semibold">Fable</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-1 bg-[var(--fable-purple)]/10 text-[var(--fable-purple)] rounded-full text-sm font-medium mb-4">
                Fable
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Your Stories, Beautifully Told
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                Transform your photos and memories into beautiful, shareable stories. Create digital photo books, journals, and collections that capture life&apos;s most meaningful moments.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--fable-purple)]/20 flex items-center justify-center text-[var(--fable-purple)]">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Create stunning photo collections</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--fable-purple)]/20 flex items-center justify-center text-[var(--fable-purple)]">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Add stories and captions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--fable-purple)]/20 flex items-center justify-center text-[var(--fable-purple)]">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Share with family and friends</span>
                </li>
              </ul>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--fable-purple)]/20 text-[var(--fable-purple)] rounded-full font-medium">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Ready Get</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            We&apos;re a small team passionate about building apps that bring people closer together.
            In a world of fleeting digital interactions, we believe in creating meaningful connections
            through thoughtful, well-crafted experiences.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--postie-coral)]">2</div>
              <div className="text-slate-600 dark:text-slate-400">Apps</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--fable-purple)]">∞</div>
              <div className="text-slate-600 dark:text-slate-400">Memories Shared</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-xl font-bold">Ready Get</span>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Apps that connect people</p>
            </div>
            <div className="flex gap-6">
              <Link href="https://trypostie.com" target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-[var(--postie-coral)] transition-colors">
                Postie
              </Link>
              <a href="mailto:hello@readyget.app" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Ready Get. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
