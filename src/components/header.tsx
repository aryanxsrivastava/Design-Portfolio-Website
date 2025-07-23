import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="font-bold sm:inline-block">Aryxn Designs</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center space-x-4 sm:justify-end">
          <Button variant="ghost" asChild>
            <Link href="#work">Work</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
