import { Outlet } from 'react-router-dom';
import MainHeader from '../MainHeader';

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
