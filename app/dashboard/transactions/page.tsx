import { CreateInvoice } from './addTransaction';
import { Transactions } from '@/lib/definations';

const transactions: Transactions[] = [
  { id: 1, date: '2024-01-20', description: 'Grocery Store', category: 'Food', amount: -85.50 },
  { id: 2, date: '2024-01-19', description: 'Salary Deposit', category: 'Income', amount: 3000.00 },
  { id: 3, date: '2024-01-18', description: 'Electric Bill', category: 'Utilities', amount: -120.75 },
  { id: 4, date: '2024-01-17', description: 'Restaurant', category: 'Food', amount: -45.20 },
];

export default function TransactionPage() {
  return (
    <div className=''>
      <div className='mb-8'>
        <CreateInvoice />
      </div>
      <div className='overflow-x-auto bg-white rounded-lg shadow'>
        <table className='min-w-full table-auto'>
          <thead>
            <tr className='bg-gray-50 border-b border-gray-200'>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'>
                Date
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'>
                Description
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'>
                Category
              </th>
              <th className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'>
                Amount
              </th>
              <th className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'>
                
              </th>
              <th className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'>
                
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-6 py-4 text-sm text-gray-900">{transaction.date}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{transaction.description}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{transaction.category}</td>
              <td className={`px-6 py-4 text-sm text-right ${
                transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                ${Math.abs(transaction.amount).toFixed(2)}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-right font-medium '>
                <button className='py-2 px-4 bg-orange-400 text-white font-bold rounded-xl'>Edit</button>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-right font-medium '>
                <button className='py-2 px-4 bg-red-400 text-white font-bold rounded-xl'>Delete</button>
              </td>
            </tr>
            
          ))}
             
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
