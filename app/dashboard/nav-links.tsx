'use client';

import { GrTransaction } from "react-icons/gr";
import { FaChartPie, FaUsers } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
// import { CiLink } from "react-icons/ci";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Overview', href: '/dashboard', icon: <FaHome /> },
  {
    name: 'Transactions',
    href: '/dashboard/transactions',
    icon: <GrTransaction />,
  },
  { name: 'Budget', href: '/dashboard/budget', icon: <FaChartPie /> },
  { name: 'Pots', href: '/dashboard/pots', icon: <FaUsers />},
  { name: 'Revenue Bills', href: '/dashboard/revenue', icon: <FaMoneyBills />},
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon= link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
          >
            <p className="">{LinkIcon}</p>
            <p className='hidden md:block '> <span>{link.name}</span></p>
          </Link>
        );
      })}
    </>
  );
}
