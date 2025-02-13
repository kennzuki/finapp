'use server';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTransactions(formData: FormData) {
  await prisma.expense.create({
    data: {
      category: formData.get('category') as string,
      amount: parseInt(formData.get('amount') as string),
      description: formData.get('description') as string,
    },
  });
    revalidatePath('/dashboard/transactions');
    redirect('/dashboard/transactions');
}

export async function updateTransactions(formData: FormData,id: number) { 
    await prisma.expense.update({
      where: { id },
      data: {
        category: formData.get('category') as string,
        amount: parseInt(formData.get('amount') as string),
        description: formData.get('description') as string,
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
 




