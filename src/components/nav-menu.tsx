import Link from 'next/link';
import ThemeToggler from './theme-toggle';

type Props = {
  vertical?: boolean;
  showHome?: boolean;
  currentPage?: string;
};

const NavMenu = ({ vertical = false, showHome = true, currentPage = '' }: Props) => {
  const links = [
    { label: 'blog', href: '/blog' },
    { label: 'work', href: '/work' },
    { label: 'about', href: '/about' },
  ];
  return (
    <ul className={'flex w-full items-center gap-3' + (vertical ? ' flex-col' : '')}>
      {showHome && (
        <li>
          <Link
            className="hover:highlight no-underline underline-offset-4 hover:underline"
            href="/"
          >
            ~
          </Link>
        </li>
      )}
      {links.map((link) => (
        <li key={link.label}>
          <Link
            className={
              'hover:highlight no-underline underline-offset-4 hover:underline' +
              (currentPage == link.href ? ' selected font-bold no-underline' : '')
            }
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
      <li className={vertical ? '' : 'ml-auto'}>
        <ThemeToggler />
      </li>
    </ul>
  );
};

export default NavMenu;
