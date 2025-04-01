import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

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

const RedirectToExternal = ({ url }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = url; // Redirect to the external site
  }, [url]);

  return <p>Redirecting...</p>; // Optional message while redirecting
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/design1" element={<RedirectToExternal url="https://www.redbubble.com/people/nicos-novelts/shop?artistUserName=Nicos-NovelTs&asc=u&iaCode=all-departments&sortOrder=top%20selling" />} />
      <Route path="/design2" element={<RedirectToExternal url="https://www.redbubble.com/people/nicos-novelts/shop?artistUserName=Nicos-NovelTs&asc=u&iaCode=all-departments&sortOrder=top%20selling" />} />
      <Route path="/design3" element={<RedirectToExternal url="https://www.redbubble.com/people/nicos-novelts/shop?artistUserName=Nicos-NovelTs&asc=u&iaCode=all-departments&sortOrder=top%20selling" />} />
      <Route path="/design4" element={<RedirectToExternal url="https://www.redbubble.com/people/nicos-novelts/shop?artistUserName=Nicos-NovelTs&asc=u&iaCode=all-departments&sortOrder=top%20selling" />} />

    </Routes>
  );
};

export default App;
