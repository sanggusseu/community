import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-4">
        <Outlet />
      </main>
    </>
  );
}
