import { FaPlus } from "react-icons/fa";
import Link from 'next/link';


export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/transactions/create"
      className="flex gap-4 h-10 items-center border border-white rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <FaPlus  className="h-5 md:ml-4" />
    </Link>
  );
}