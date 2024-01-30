import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/NavbarComponent";
import AllBooks from "./components/AllTheBooks";
import WelcomeAllert from "./components/Welcome";
import CustomFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
        <WelcomeAllert />
      </header>
      <main>
        <AllBooks />
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </>
  );
}

export default App;
