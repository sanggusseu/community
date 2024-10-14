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
import OtherWishesPage from './pages/OtherWishesPage.jsx';
import MyPage from './pages/MyPage.jsx';
import { AuthContext, AuthProvider } from './context/AuthContext.jsx';
import CreateWishPage from './pages/CreateWishPage.jsx';
import { WishProvider } from './context/WishContext.jsx';
import EditWishPage from './pages/EditWishPage.jsx';
import DetailPage from './pages/DetailPage.jsx';

const AppRoutes = () => {
  const { user } = useContext(AuthContext);
  const isLoggedIn = !!user;

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: isLoggedIn ? <MyWishPage /> : <OtherWishesPage />,
        },
        {
          path: 'other',
          element: <OtherWishesPage />,
        },
        {
          path: 'mypage',
          element: isLoggedIn ? <MyPage /> : <Navigate to="/" />,
        },
        {
          path: 'create',
          element: isLoggedIn ? <CreateWishPage /> : <Navigate to="/" />,
        },
        {
          path: 'edit/:id',
          element: isLoggedIn ? <EditWishPage /> : <Navigate to="/" />,
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
