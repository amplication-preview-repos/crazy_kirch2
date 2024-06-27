import { SortOrder } from "../../util/SortOrder";

export type MenuItemOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
