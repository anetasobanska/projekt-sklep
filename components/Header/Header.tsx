import Link from 'next/link';
import { HeaderNavigation } from './HeaderNavigation';

export function Header() {
  return (
    <header className="border-b border-transparent">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button type="button" className="p-2 sm:mr-4 lg:hidden">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link href="" className="flex">
            <span className="flex justify-center items-center h-10 w-32 rounded-lg bg-red-700 text-white">shop</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <HeaderNavigation />
        </div>
      </div>
    </header>
  );
}