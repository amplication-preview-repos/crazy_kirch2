import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  paymentStatus?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
