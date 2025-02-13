import EditTransactionForm from '../../edit-form';

// import { prisma } from '@/lib/db';
// import { Transactions } from "@/lib/definations";

export default async function Page() {
  // const transactions = await prisma.expense.findUnique({ where: { id } });

  return (
    <div>
      <h1 className='text-center text-2xl font-bold text-white mb-8'>
        Edit Transaction
      </h1>
      <EditTransactionForm />
    </div>
  );
}
