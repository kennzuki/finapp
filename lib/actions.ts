'use server';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function createTransactions(formData: FormData) {
  await prisma.expense.create({
    data: {
      userId: parseInt(formData.get('userId') as string),
      category: formData.get('category') as string,
      amount: parseInt(formData.get('amount') as string),
    },
  });
    revalidatePath('/dashboard/transactions');
}
export async function deleteTransactions(id: number) {
    await prisma.expense.delete({ where: { id } });
    revalidatePath('/dashboard/transactions');
 }
