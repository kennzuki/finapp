import React from 'react'
import TransactionPage from './transactions/page'

const Page = () => {
  return (
    <div>
      <h1 className="text-3xl uppercase mb-7 dark:text-white font-bold">Overview</h1>
      <section className="grid xs:grid-cols-1 md:grid-cols-5 gap-4 [&_article]:p-6 [&_article]:bg-[#061B3E] [&_article]:rounded-xl w-full">
        <article className="bg-black text-white col-span-2 capitalise">
          <h2 className="">current balance</h2>
          <p className="text-2xl font-bold">$4,023</p>
        </article>
        <article className="bg-black text-white col-span-2 col-start-3">
          <h2 className="">Income</h2>
          <p className="text-2xl font-bold">$4,023</p>
        </article>
        <article className="bg-black text-white col-span-2 col-start-5 ">
          <h2 className="">Expenses</h2>
          <p className="text-2xl font-bold">$4,023</p>
        </article>
        <article className="col-span-3 row-span-2 row-start-2"></article>
        <article className="col-span-3 col-start-1 row-start-4"> <TransactionPage/></article>
        <article className="col-span-3 row-span-4 col-start-4 row-start-2"></article>
      </section>
     
    </div>
  )
}

export default Page