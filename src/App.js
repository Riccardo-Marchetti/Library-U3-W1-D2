import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/NavbarComponent";
import WelcomeAllert from "./components/Welcome";
import CustomFooter from "./components/MyFooter";
import ListBook from "./components/BookList";
import book from "../src/Data/horror.json";

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
        <WelcomeAllert />
      </header>
      <main>
        <ListBook jsonbook={book} />
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </>
  );
}

export default App;
