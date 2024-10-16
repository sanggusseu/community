import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <main>
      <div className="container mx-auto py-20 px-4">
        <Outlet />
      </div>
    </main>
  );
}
