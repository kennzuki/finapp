'use client'

import { deleteTransactions } from '@/lib/actions';
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import Link from 'next/link';

export function UpdateTransactions({ id }: { id: number }) {
    return (
      <Link
        href={`/dashboard/transactions/${id}/edit`}
        className="rounded-md  p-6 hover:bg-gray-100"
      >
        <FaPencil className="w-5 md:ml-4 text-orange-500  " />
      </Link>
    );
  }

export function DeleteTransaction({ id }: { id: number }) {
    const deleteTransactionWithId =  deleteTransactions.bind(null, id);
    return (        
              <form action={deleteTransactionWithId} >
              <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only text-black">Delete</span>
                <FaTrash className="w-4 text-red-800" />
              </button>
            </form>
  
);
}
