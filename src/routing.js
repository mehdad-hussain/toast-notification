import { RootLayout } from "layout";
import { Home, Modal, Toast } from "pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/Toast" element={<Toast />} />
    </Route>
  )
);
