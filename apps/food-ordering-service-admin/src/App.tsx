import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RestaurantList } from "./restaurant/RestaurantList";
import { RestaurantCreate } from "./restaurant/RestaurantCreate";
import { RestaurantEdit } from "./restaurant/RestaurantEdit";
import { RestaurantShow } from "./restaurant/RestaurantShow";
import { MenuItemList } from "./menuItem/MenuItemList";
import { MenuItemCreate } from "./menuItem/MenuItemCreate";
import { MenuItemEdit } from "./menuItem/MenuItemEdit";
import { MenuItemShow } from "./menuItem/MenuItemShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FoodOrderingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Restaurant"
          list={RestaurantList}
          edit={RestaurantEdit}
          create={RestaurantCreate}
          show={RestaurantShow}
        />
        <Resource
          name="MenuItem"
          list={MenuItemList}
          edit={MenuItemEdit}
          create={MenuItemCreate}
          show={MenuItemShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
