import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyWish from './pages/MyWish.jsx';
import OtherWishes from './pages/OtherWishes.jsx';
import MyPage from './pages/MyPage.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

const isLoggedIn = false;
const getMainElement = isLoggedIn =>
  isLoggedIn ? <MyWish /> : <OtherWishes />;

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
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
