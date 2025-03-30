import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  const designs = ["design1", "design2", "design3", "design4"];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Designs</h1>
      <ul>
        {designs.map((design) => (
          <li key={design}>
            <Link to={`/${design}`}>{design}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DesignPage = ({ name }) => (
  <div style={{ padding: "20px" }}>
    <h2>Welcome to {name}</h2>
    <p>This is the {name} design.</p>
    <Link to="/">Back to Home</Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design1" element={<DesignPage name="Design 1" />} />
        <Route path="/design2" element={<DesignPage name="Design 2" />} />
        <Route path="/design3" element={<DesignPage name="Design 3" />} />
        <Route path="/design4" element={<DesignPage name="Design 4" />} />
      </Routes>
    </Router>
  );
};

export default App;
