import Table from "./component/Table";
import { Route, Routes } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Chart from "./component/Chart";

export default function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="button">
        <button
          onClick={(e) => {
            navigate("/");
          }}
        >
          Table
        </button>
        <button
          onClick={(e) => {
            navigate("/Chart");
          }}
        >
          Chart
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Table />}></Route>
        <Route path="/Chart" element={<Chart />}></Route>
      </Routes>
    </div>
  );
}
