import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

const RedirectToExternal = ({ url }) => {
  useEffect(() => {
    window.location.href = url; // Redirects to the external site
  }, [url]);

  return <p>Redirecting...</p>; // Optional message while redirecting
};

// Links Page Component
const Links = () => {
  const designs = [
    "you-are-not-alone",
    "you-are-not-alone-mirror",
    "design3",
    "design4"
  ];

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

const App = () => {
  return (
    <Routes>
      {/* Redirect Home ("/") to Redbubble */}
      <Route
        path="/"
        element={
          <RedirectToExternal url="https://www.redbubble.com/people/nicos-novelts/shop?artistUserName=Nicos-NovelTs&asc=u&iaCode=all-departments&sortOrder=top%20selling" />
        }
      />

      {/* Links Page */}
      <Route path="/links" element={<Links />} />

      {/* Other design redirects */}
      <Route
        path="/you-are-not-alone"
        element={<RedirectToExternal url="http://redbubble.com/shop/ap/169662999" />}
      />
      <Route
        path="/you-are-not-alone-mirror"
        element={
          <RedirectToExternal url="https://www.redbubble.com/people/nicos-novelts/shop?artistUserName=Nicos-NovelTs&asc=u&iaCode=all-departments&sortOrder=top%20selling" />
        }
      />
      <Route
        path="/design3"
        element={
          <RedirectToExternal url="https://www.redbubble.com/people/nicos-novelts/shop?artistUserName=Nicos-NovelTs&asc=u&iaCode=all-departments&sortOrder=top%20selling" />
        }
      />
      <Route
        path="/design4"
        element={
          <RedirectToExternal url="https://www.redbubble.com/people/nicos-novelts/shop?artistUserName=Nicos-NovelTs&asc=u&iaCode=all-departments&sortOrder=top%20selling" />
        }
      />
    </Routes>
  );
};

export default App;
