'use client';

// import { Transactions } from '@/lib/definations';

export default function Form() {
  return (
    <>
      <h1 className='dark:text-white text-2xl font-bold uppercase mb-12 text-center'>
        Add a transaction
      </h1>
      <form className='space-y-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md h-1/2 w-1/2'>
        <input type='date' name='date' className='w-full dark:bg-white' />

        <input
          type='number'
          name='amount'
          placeholder='Amount'
          step='0.01'
          min='0'
          className='w-full dark:bg-white'
        />
        <label>Choose a transaction type:</label>
        <select name='category'>
          <option value='income' className='w-full dark:bg-white text-gray-600'>
            Income
          </option>
          <option value='debt' className='w-full dark:bg-white text-black'>
            Debt
          </option>
        </select>

        <input
          type='text'
          name='description'
          placeholder='Description'
          className='w-full dark:bg-white'
        />

        <button
          type='submit'
          className='w-full py-2 px-4 rounded-xl shadow-lg bg-black text-white font-bold'
        >
          Add Transaction
        </button>
      </form>
    </>
  );
}
