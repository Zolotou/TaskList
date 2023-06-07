import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "antd/dist/reset.css";
import "./stylesheets/App.css";
import TaskListPage from "./pages/TaskListPage";
import {ApplicationLayout} from "./layouts/ApplicationLayout";
import { Provider } from 'mobx-react';
import {rootStore} from "./stores";


function App() {
  return (
      <Provider {...rootStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ApplicationLayout/>}>
              <Route path="/" element={<TaskListPage />} />
            </Route>
            <Route path="*" element={<div> NOT FOUND </div>} />
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
