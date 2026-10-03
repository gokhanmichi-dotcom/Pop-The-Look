import Header from "./components/Header";
import Footer from "./components/Footer";
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

      <Footer />
    </div>
  );
}

export default App;
