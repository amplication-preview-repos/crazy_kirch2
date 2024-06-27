export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  paymentStatus?: "Option1" | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
