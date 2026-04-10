import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="max-w-4xl m-auto flex flex-col gap-8 ">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
