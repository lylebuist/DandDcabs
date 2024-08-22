import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react'; // import state

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

export default function NavbarTwoColumns(props: INavbarProps) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-1">
      <div className="px-6">
        <Link href="/">{props.logo}</Link>
      </div>
      <nav className="pr-8">
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className="CROSS-ICON absolute right-0 top-0 p-2"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="size-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex min-h-[250px] flex-col items-center justify-between">
              {props.children}
            </ul>
          </div>
        </section>

        <ul className="navbar hidden items-center px-8 text-xl text-gray-800 lg:flex">
          {props.children}
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 40vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      .navbar :global(li:not(:first-child)) {
        @apply mt-0;
      }

      .navbar :global(li:not(:last-child)) {
        @apply mr-5;
      }
    `}</style>
    </div>
  );
}

export { NavbarTwoColumns };
