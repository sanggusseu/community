import { StrictMode, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyWish from './pages/MyWish.jsx';
import OtherWishes from './pages/OtherWishes.jsx';
import MyPage from './pages/MyPage.jsx';
import { AuthContext, AuthProvider } from './context/AuthContext.jsx';
import CreateWishPage from './pages/CreateWishPage.jsx';
import { WishProvider } from './context/WishContext.jsx';
import EditWishPage from './pages/EditWishPage.jsx';

const getMainElement = isLoggedIn => {
  return isLoggedIn ? <MyWish /> : <OtherWishes />;
};

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
          element: getMainElement(isLoggedIn),
        },
        {
          path: 'other',
          element: <OtherWishes />,
        },
        {
          path: 'my',
          element: <MyWish />,
        },
        {
          path: 'mypage',
          element: <MyPage />,
        },
        {
          path: 'create',
          element: <CreateWishPage />,
        },
        {
          path: 'edit/:id',
          element: <EditWishPage />,
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
