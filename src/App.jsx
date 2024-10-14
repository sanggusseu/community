import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  return (
    <div className="min-h-screen dark:bg-gray-800 bg-gray-100">
      <Header />
      <main>
        <div className="container mx-auto py-20 px-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
