import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

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

const DesignPage = () => {
  const { designName } = useParams();
    const formattedName = designName.charAt(0).toUpperCase() + designName.slice(1,6) + " " + designName.slice(6);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to {formattedName}</h2>
      <p>This is the {formattedName} design.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

const App = () => {
  return (
	<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:designName" element={<DesignPage />} />
    </Routes>
	</BrowserRouter>
  );
};

export default App;