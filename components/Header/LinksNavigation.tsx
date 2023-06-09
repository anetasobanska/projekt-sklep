import Link from 'next/link';
import {ActiveLink} from '../ActiveLink';

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/products',
    label: 'Shop',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];
export const LinksNavigation = () => {
  return (
    <nav>
      <ul className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
        {links.map((link) => (
          <LinkNavigationItem key={link.href} href={link.href} label={link.label} />
        ))}
      </ul>
    </nav>
  );
};

interface LinkNavigationItemProps {
  href: string;
  label: string;
}
const LinkNavigationItem = ({ href, label }: LinkNavigationItemProps) => {
  return (
    <li className="block">
      <ActiveLink href={href} activeClassName="text-red-700" exact={false} >
          <span className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
            {label}
          </span>
      </ActiveLink>
    </li>
  );
};