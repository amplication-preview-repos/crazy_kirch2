import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  cuisineType?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
