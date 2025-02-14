'use client';

// import { updateTransactions } from '@/lib/actions';
import Link from 'next/link';


export default function EditTransactionForm() {
  // Fetch the existing transaction to populate the form fields.
  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <form
       
      className='flex flex-col gap-8 [&_input]:border [&_input]:p-4 [&_input]:rounded'
    >
      <input
        type='number'
        name='amount'
        placeholder='Amount'
        step='0.01'
        min='0'
        className='w-full dark:bg-white border p-2 rounded'
      />
      <label>Choose a transaction type:</label>
      <select name='category' className='p-4'>
        <option value='income' className='w-full dark:bg-white text-gray-600 p-4 border'>
          Income
        </option>
        <option value='debt' className='w-full dark:bg-white text-black border p-4'>
          Debt
        </option>
      </select>

      <input
        type='text'
        name='description'
        placeholder='Description'
        className='w-full dark:bg-white'
      />
      <div className='flex gap-4 place-items-center'>
        <button
          type='submit'
          className='w-full py-2 px-4 rounded-xl shadow-lg bg-blue-500 text-white font-bold'
        >
          Add Transaction
        </button>
        <Link
          href={'/dashboard'}
          type='submit'
          className='w-full py-2 px-4 text-center rounded-xl shadow-lg bg-blue-500 text-white font-bold'
        >
          Cancel
        </Link>
        </div>
        
    </form>
    </div>

  );
}

