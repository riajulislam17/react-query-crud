import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Books from "./component/Books";
import UpdateBook from "./component/UpdateBook";

function App() {
  return (
    <Suspense>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/:id" element={<UpdateBook />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
