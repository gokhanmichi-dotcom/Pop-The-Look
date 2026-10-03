import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

function App() {
  return (
    <div>
      <Sidebar />

      <main>
        <Dashboard />
        <Products />
        <Orders />
      </main>
    </div>
  );
}

export default App;
