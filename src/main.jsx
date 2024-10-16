import { StrictMode, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import MyWishPage from './pages/MyWishPage.jsx';
import HomePage from './pages/HomePage.jsx';
import MyPage from './pages/MyPage.jsx';
import { AuthContext, AuthProvider } from './context/AuthContext.jsx';
import CreateWishPage from './pages/CreateWishPage.jsx';
import { WishProvider } from './context/WishContext.jsx';
import EditWishPage from './pages/EditWishPage.jsx';
import DetailPage from './pages/DetailPage.jsx';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: 'my-wish',
          element: (
            <ProtectedRoute>
              <MyWishPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'my-page',
          element: (
            <ProtectedRoute>
              <MyPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'create',
          element: (
            <ProtectedRoute>
              <CreateWishPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'edit/:id',
          element: (
            <ProtectedRoute>
              <EditWishPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'posts/:id',
          element: <DetailPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <WishProvider>
        <AppRoutes />
      </WishProvider>
    </AuthProvider>
  </StrictMode>,
);
