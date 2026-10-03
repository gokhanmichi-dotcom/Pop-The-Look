import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";

function App() {
  return (
    <div>
      <Sidebar />

      <main>
        <Dashboard />
        <Products />
        <Orders />
        <Customers />
      </main>
    </div>
  );
}

export default App;
