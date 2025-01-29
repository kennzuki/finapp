'use client';

// import { Transactions } from '@/lib/definations';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Form() {
  return (
    <>
      <h1 className="dark:text-white text-2xl font-bold uppercase mb-12 text-center">Add a transaction</h1>
      <form className='space-y-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md'>
        <Input type='date' name='date' className='w-full dark:bg-white' />

        <Input
          type='number'
          name='amount'
          placeholder='Amount'
          step='0.01'
          min='0'
          className='w-full dark:bg-white'
        />

        <Select name='category'  >
          <SelectTrigger className='w-full dark:bg-white'>
            <SelectValue placeholder='Select Category' />
          </SelectTrigger>
          <SelectContent className='w-full dark:bg-white'>
            <SelectItem value='income'className='w-full dark:bg-white text-gray-600'>Income</SelectItem>
            <SelectItem value='debt' className='w-full dark:bg-white text-black'>Debt</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type='text'
          name='description'
          placeholder='Description'
          className='w-full dark:bg-white'
        />

        <Button type='submit' className='w-full bg-black text-white font-bold'>
          Add Transaction
        </Button>
      </form>
    </>
  );
}
