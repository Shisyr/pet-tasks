import React from 'react';
import classNames from 'classnames';
import './index.scss';
import {useNavigate} from "react-router-dom";
import {RoutePathEnums} from "../../routes";

const Tabs = () => {
  const navigation = useNavigate();
  const { pathname } = location;
  const onPush = (path: string) => () => {
    navigation(path);
  };
  return (
    <section className={'tabSectionContainer'}>
      <div
        className={classNames('tabItem', pathname === RoutePathEnums.CALCULATOR ? 'activeTabItem' : '')}
        onClick={onPush(RoutePathEnums.CALCULATOR)}
      >
        Calculator
      </div>
      <div className={'tabItem'}>Note</div>
    </section>
  );
}
export default Tabs;