import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const RedirectToExternal = ({ url }) => {
  useEffect(() => {
    window.location.href = url; // Redirects to the external site
  }, [url]);

  return <p>Redirecting...</p>; // Optional message while redirecting
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
