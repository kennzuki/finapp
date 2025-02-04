'use client'

import { deleteTransactions } from '@/lib/actions';
import { FaTrash } from "react-icons/fa";

export function DeleteTransaction({ id }: { id: number }) {
    const deleteTransactionWithId =  deleteTransactions.bind(null, id);
    return (        
              <form action={deleteTransactionWithId} >
              <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Delete</span>
                <FaTrash className="w-4" />
              </button>
            </form>
  
);
}
