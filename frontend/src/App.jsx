import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import MapPage from "./pages/MapPage";
import FormsPage from "./pages/FormsPage";
import NoteAppPage from "./pages/NoteAppPage";
import FramerMotionPage from "./pages/FramerMotionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/forms" replace />,
      },
      {
        path: "/forms",
        element: <FormsPage />,
      },
      {
        path: "/notes-app",
        element: <NoteAppPage />,
      },
      {
        path: "/maps",
        element: <MapPage />,
      },
      {
        path: "/framer-motion",
        element: <FramerMotionPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
