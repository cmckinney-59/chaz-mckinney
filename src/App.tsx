import type { JSX } from "react";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import RootLayout from "./Root";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage/ProjectDetailPage";
import ReadingPage from "./pages/ReadingPage/ReadingPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/work", element: <ProjectsPage /> },
      { path: "/work/:projectId", element: <ProjectDetailPage /> },
      { path: "/projects", element: <Navigate to="/work" replace /> },
      { path: "/reading", element: <ReadingPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
