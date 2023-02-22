import { RootLayout } from "layout";
import { Home, ModalPage, ToastPage } from "pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/modal" element={<ModalPage />} />
      <Route path="/Toast" element={<ToastPage />} />
    </Route>
  )
);
