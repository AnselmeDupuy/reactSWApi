import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import CharacterDetails from "./pages/CharacterDetails";
import { ThemeProvider } from "./context/lightmode";

// ThemeProvider



const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/characters", element: <Characters /> },
  { path: "/characters/:id", element: <CharacterDetails /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);