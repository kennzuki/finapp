import { FaPlus } from "react-icons/fa";
import Link from 'next/link';


export function CreateTransaction() {
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

// export function UpdateTransaction({ id }: { id: string }) {
//   return (
//     <Link
//       href={`/dashboard/invoices/${id}/edit`}
//       className="rounded-md border p-2 hover:bg-gray-100"
//     >
//       <PencilIcon className="w-5" />
//     </Link>
//   );
// }

// export function DeleteTransaction({ id }: { id: string }) {
//   const deleteInvoiceWithId = deleteInvoice.bind(null, id);
//   return (
//     <form action={deleteInvoiceWithId}>
//     <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
//       <span className="sr-only">Delete</span>
//       <TrashIcon className="w-4" />
//     </button>
//   </form>
//   );
// }