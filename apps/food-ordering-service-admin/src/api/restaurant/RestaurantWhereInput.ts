import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RestaurantWhereInput = {
  address?: StringNullableFilter;
  cuisineType?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
