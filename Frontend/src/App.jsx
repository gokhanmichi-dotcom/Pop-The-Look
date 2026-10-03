import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Home />
        <Shop />
      </main>
    </div>
  );
}

export default App;
