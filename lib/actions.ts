'use server';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTransactions(formData: FormData) {
  await prisma.expense.create({
    data: {
      userId: parseInt(formData.get('userId') as string),
      category: formData.get('category') as string,
      amount: parseInt(formData.get('amount') as string),
    },
  });
    revalidatePath('/dashboard/transactions');
    redirect('/dashboard/transactions');
}

export async function updateTransactions(id: number, formData: FormData) { 
    await prisma.expense.update({
      where: { id },
      data: {
        category: formData.get('category') as string,
        amount: parseInt(formData.get('amount') as string),
      },
    });
    revalidatePath('/dashboard/transactions');
    redirect('/dashboard/transactions');
 
}
export async function deleteTransactions(id: number) {
    await prisma.expense.delete({ where: { id } });
    revalidatePath('/dashboard/transactions');
    redirect('/dashboard/transactions');
 }
