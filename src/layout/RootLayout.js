import { Nav } from "components";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
};
