import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "antd/dist/reset.css";
import "./App.css";
import { TaskList } from "./pages/TaskList";
import {ApplicationLayout} from "./layouts/ApplicationLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicationLayout/>}>
          <Route path="/" element={<TaskList />} />
        </Route>
        <Route path="*" element={<div> NOT FOUND </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
