import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "antd/dist/reset.css";
import "./App.css";
import TaskListPage from "./pages/TaskListPage";
import {ApplicationLayout} from "./layouts/ApplicationLayout";
import { Provider } from 'mobx-react';
import taskListStore from "./stores/taskListStore";

const stores = {
  taskListStore
}

function App() {
  return (
      <Provider {...stores}>
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
