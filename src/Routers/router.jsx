import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import { IndexPage } from '../pages/IndexPage';
import { HotelPage } from '../pages/HotelPage';
import { LoginPage } from '../pages/LoginPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Outlet />}>
        <Route path="hotels/:id" element={<HotelPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="" element={<IndexPage />} />
      </Route>
    </>,
  ),
);
