import React from 'react';

import { prisma } from '@/lib/db';
import { DeleteTransaction, UpdateInvoice } from './transactions/buttons';

const transactions = await prisma.expense.findMany();

const TransactionTable = () => {
  return (
    <div className='overflow-x-auto bg-white rounded-lg shadow'>
      <table className='min-w-full table-auto'>
        <thead>
          <tr className='bg-gray-50 border-b border-gray-200'>
            <th className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'>
              Category
            </th>
            <th className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'>
              Amount
            </th>
            <th className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'>
              Descriptions
            </th>
            <th className='px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'>
              Date
            </th>
            <th className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'></th>
            <th className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'></th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200 [&_td]:text-center'>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className='px-6 py-4 text-sm text-gray-900'>
                {transaction.category}
              </td>

              <td
                className={`px-6 py-4 text-sm text-right ${
                  transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                ${transaction.amount}
              </td>
              <td className='px-6 py-4 text-sm text-gray-900'>
                {transaction.description}
              </td>
              <td className='px-6 py-4 text-sm text-gray-900'>
                {transaction.createdAt.toLocaleDateString()}
              </td>

              <div className='flex justify-end gap-3 place-items-center'>
                <UpdateInvoice id={transaction.id} />

                <DeleteTransaction id={transaction.id} />
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
