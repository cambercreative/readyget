import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function Hero() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Apps that help you connect and preserve what matters most
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We build thoughtful apps that strengthen relationships and capture memories worth keeping.
        </p>
      </div>
    </section>
  );
}

function ProductCard({
  name,
  tagline,
  description,
  features,
  href,
  gradient,
}: {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  gradient: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 transition-all hover:shadow-lg">
      <div
        className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity ${gradient}`}
      />
      <div className="relative">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{tagline}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <svg
                className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
        >
          Learn more
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

function Products() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Simple, delightful apps that make it easy to stay connected with the people you love.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ProductCard
            name="Postie"
            tagline="Send real postcards from your phone"
            description="Pick a photo, write a message, and we'll print and mail a real postcard anywhere in the world. No trip to the post office required."
            features={[
              "Choose any photo from your library",
              "Write a personal message",
              "We print, stamp, and mail it for you",
              "Track delivery to its destination",
            ]}
            href="https://trypostie.com"
            gradient="bg-gradient-to-br from-orange-400 to-pink-500"
          />
          <ProductCard
            name="Fable"
            tagline="Capture your life story with AI"
            description="Record meaningful conversations with an AI interviewer that remembers everything. Your stories are automatically organized into a beautiful, shareable memoir."
            features={[
              "AI-powered voice interviews",
              "Remembers your previous conversations",
              "Organizes stories by topic and life phase",
              "Share with family and future generations",
            ]}
            href="https://tryfable.com"
            gradient="bg-gradient-to-br from-indigo-400 to-purple-500"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
