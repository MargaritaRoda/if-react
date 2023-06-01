import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import App from '../App';
import { HotelPage } from '../components/HotelPage';
import { LoginPage } from '../components/LoginPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Outlet />}>
        <Route path="hotels/:id" element={<HotelPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="" element={<App />} />
      </Route>
    </>,
  ),
);
