import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/NavbarComponent";
import WelcomeAllert from "./components/Welcome";
import CustomFooter from "./components/MyFooter";
import FormComment from "./components/AddComment";
import ListBook from "./components/BookList";
import horror from "../src/Data/horror.json";

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
        <WelcomeAllert />
      </header>
      <main>
        <ListBook books={horror} />
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </>
  );
}

export default App;
