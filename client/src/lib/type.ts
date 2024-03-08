export enum TransactionType {
  Income = 'Income',
  Outcome = 'Outcome',
}

export enum Category {}

export enum PaymentMethod {
  BIDV = 'BIDV',
  TPBank = 'TPBank',
  Momo = 'Momo',
  ShoppePay = 'ShoppePay',
  ZaloPay = 'ZaloPay',
  Cash = 'Cash',
}

export interface Transaction {
  amount: number;
  date: string;
  type: TransactionType;
  category: string;
  description: string;
  note: string;
  paymentMethod: PaymentMethod;
  status: boolean;
}
