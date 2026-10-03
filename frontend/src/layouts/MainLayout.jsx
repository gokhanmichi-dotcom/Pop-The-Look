import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <header>
        <h2>POP THE LOOK</h2>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© POP THE LOOK</p>
      </footer>
    </div>
  );
}

export default MainLayout;
