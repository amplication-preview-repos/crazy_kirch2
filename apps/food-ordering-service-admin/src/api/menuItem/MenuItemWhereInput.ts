import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type MenuItemWhereInput = {
  category?: "Option1";
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
