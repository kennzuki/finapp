import React, { Suspense } from 'react';
// import { prisma } from '@/lib/db';
import TransactionTable from './table';
import { IncomeSum, DebtSum } from '@/lib/actions';
import ExpenseSkeleton from '@/app/components/Skeleton';

import  { PieComponent } from './chart';

type IncomeSumType = {
  _sum: {
    amount: number | null;
  };
};




const Page = async () => {
  let incomeSum: IncomeSumType = { _sum: { amount: 0 } };
  let debtSum: IncomeSumType = { _sum: { amount: 0 } };

  try {
    incomeSum = await IncomeSum();
    debtSum = await DebtSum();
  } catch (error) {
    console.error('Error fetching income sum:', error);
  }

  const balance = (incomeSum._sum.amount ?? 0) - (debtSum._sum.amount ?? 0)
  return (
    <div>
      <h1 className='text-3xl uppercase mb-7 dark:text-white font-bold'>
        Overview
      </h1>
      <section className='grid xs:grid-cols-1 md:grid-cols-5 gap-4 [&_article]:p-6 [&_article]:bg-[#061B3E] [&_article]:rounded-xl w-full'>
        <article className='bg-black text-white col-span-2 capitalise'>
          <h2 className=''>current balance</h2>
          <Suspense fallback={<ExpenseSkeleton />}/>
          <p className='text-2xl font-bold'>${balance}</p>
        </article>
        {/* expense income */}
        <article className='bg-black text-white col-span-2 capitalise'>
          <h2 className=''>Income</h2>
          <p className='text-2xl font-bold'> ${incomeSum._sum.amount ?? 0}</p>
        </article>
        
        {/* end */}
        <article className='bg-black text-white col-span-2 col-start-5 '>
          <h2 className=''>Expenses</h2>
          <p className='text-2xl font-bold'>${debtSum._sum.amount ?? 0}</p>
        </article>
        <article className='col-span-3 row-span-2 row-start-2'></article>
        <article className='col-span-3 col-start-1 row-start-4 p-2 overflow-auto'>
          {' '}
          <TransactionTable />
        </article>
        <article className='col-span-3 row-span-4 col-start-4 row-start-2'>
          <PieComponent />
        </article>
      </section>
    </div>
  );
};

export default Page;
