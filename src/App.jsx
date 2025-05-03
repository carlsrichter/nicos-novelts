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
    "C1-y-t-a-l-h-lg",
    "7-i-a-e-mirror-sm",
    "7-i-a-e-mirror-md",
    "7-i-a-e-mirror-lg",
    "i-am-enough-sm",
    "i-am-enough-md",
    "i-am-enough-lg",
    "6rr-yt-xs",
    "6rr-yt-sm",
    "6rr-yt-md",
    "6rr-yt-lg",
    "you-are-not-alone",
    "you-are-not-alone-mirror",
    "god-grant-me-the-serenity",
    "god-grant-me-the-serenity-mirror-t",
    "one-day-at-a-time",
    "one-day-at-a-time-mirror-t",
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
        path="/C1-y-t-a-l-h-lg"
        element={<RedirectToExternal url="https://www.redbubble.com/shop/ap/170409284" />}
      />
      
      <Route
        path="/7-i-a-e-mirror-sm"
        element={<RedirectToExternal url="https://www.redbubble.com/shop/ap/170338070" />}
      />
       <Route
        path="/7-i-a-e-mirror-md"
        element={<RedirectToExternal url="https://www.redbubble.com/shop/ap/170338199" />}
      />
       <Route
        path="/7-i-a-e-mirror-lg"
        element={<RedirectToExternal url="https://www.redbubble.com/shop/ap/170338272" />}
      />

       <Route
        path="/i-am-enough-sm"
        element={<RedirectToExternal url="https://www.redbubble.com/shop/ap/170341070" />}
      />
      <Route
        path="/i-am-enough-md"
        element={<RedirectToExternal url="https://www.redbubble.com/shop/ap/170341136" />}
      />
      <Route
        path="/i-am-enough-lg"
        element={<RedirectToExternal url="https://www.redbubble.com/shop/ap/170341167" />}
      />

      <Route
        path="/6rr-yt-xs"
        element={<RedirectToExternal url="https://www.redbubble.com/shop/ap/170274276" />}
      />
      <Route
        path="/6rr-yt-sm"
        element={<RedirectToExternal url="https://www.redbubble.com/shop/ap/170274464" />}
      />
      <Route
        path="/6rr-yt-md"
        element={<RedirectToExternal url="https://www.redbubble.com/shop/ap/170274534" />}
      />
      <Route
        path="/6rr-yt-lg"
        element={<RedirectToExternal url="https://www.redbubble.com/shop/ap/170274616" />}
      />

      <Route
        path="/you-are-not-alone"
        element={<RedirectToExternal url="http://redbubble.com/shop/ap/169662999" />}
      />
      <Route
        path="/you-are-not-alone-mirror"
        element={
          <RedirectToExternal url="https://www.redbubble.com/shop/ap/169774936" />
        }
      />

      <Route
        path="/god-grant-me-the-serenity"
        element={
          <RedirectToExternal url="https://www.redbubble.com/shop/ap/169783195" />
        }
      />
      <Route
        path="/god-grant-me-the-serenity-mirror-t"
        element={
          <RedirectToExternal url="https://www.redbubble.com/shop/ap/169783064" />
        }
      />

      <Route
        path="/one-day-at-a-time"
        element={
          <RedirectToExternal url="https://www.redbubble.com/shop/ap/169813365" />
        }
      />
      <Route
        path="/one-day-at-a-time-mirror-t"
        element={
          <RedirectToExternal url="https://www.redbubble.com/shop/ap/169813484" />
        }
      />
    </Routes>
  );
};

export default App;
