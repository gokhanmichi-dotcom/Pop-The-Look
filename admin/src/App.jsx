import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";

function App() {
  return (
    <div>
      <Sidebar />

      <main>
        <Dashboard />
        <Products />
        <Orders />
        <Customers />
        <Settings />
      </main>
    </div>
  );
}

export default App;
