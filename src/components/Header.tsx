import Link from "next/link";

export function Header() {
  return (
    <header className="w-full py-6 px-6 md:px-12">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Ready Get
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://trypostie.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            Postie
          </a>
          <a
            href="https://tryfable.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            Fable
          </a>
        </div>
      </nav>
    </header>
  );
}
