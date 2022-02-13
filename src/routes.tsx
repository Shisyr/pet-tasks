import React from 'react';
import Calculator from "./pages/Calculator";

interface CustomRoute {
  name: string;
  path: string;
  exact: boolean;
  component: React.ReactElement;
}

export enum RoutePathEnums {
  CALCULATOR = '/calculator',
}

const ListRoutes: CustomRoute[] = [
  {
    name: 'Calculator',
    path: RoutePathEnums.CALCULATOR,
    exact: false,
    component: <Calculator/>
  }
]

export default ListRoutes;
