import { PaymentMethod, Transaction, TransactionType } from '@/lib/type';

export const TransactionData: Transaction[] = [
  {
    amount: 850,
    date: '03/03/2024',
    type: TransactionType.Outcome,
    category: 'Gaming Gear',
    description: 'Mchose A5 Pro Max/ Black',
    note: 'Mchose A5 Pro Max/ Black',
    paymentMethod: PaymentMethod.ShoppePay,
    status: true,
  },
];
