import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import Tabs from "./components/Tabs";
import ListRoutes from "./routes";

const App = () => {
  return (
    <Router>
      <div className={'mainContainer'}>
        <Tabs/>
        <Routes>
          {
            ListRoutes.map((route) => (
              <Route key={route.name} path={route.path} element={route.component}/>
            ))
          }
        </Routes>
      </div>
    </Router>
  )
};

export default App;
