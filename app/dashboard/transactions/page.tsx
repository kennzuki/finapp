import TransactionTable from '../table';
import { CreateTransaction } from './addTransaction';


export default function TransactionPage() {
  return (
    <div className=''>
      <div className='mb-8'>
        <CreateTransaction />
      </div>
      <TransactionTable/>
    </div>
  );
}
