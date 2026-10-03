import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <Sidebar />

      <main>
        <Dashboard />
        <Products />
      </main>
    </div>
  );
}

export default App;
