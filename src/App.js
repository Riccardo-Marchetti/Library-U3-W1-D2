import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/NavbarComponent";
// import AllBooks from "./components/AllTheBooks";
import WelcomeAllert from "./components/Welcome";
import CustomFooter from "./components/MyFooter";
// import CustomSingleBook from "./components/SingleBook";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

// import bookFantasy from "../src/Data/fantasy.json";
// import bookHorror from "../src/Data/horror.json";
import ListBook from "./components/BookList";

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
        <WelcomeAllert />
      </header>
      <main>
        {/* <Container className="pt-5">
          <Row>
            // <CustomSingleBook bookHorror1={bookHorror} />
          </Row>
        </Container> */}
        {/* <CustomSingleBook bookHorror1={bookHorror[0]} /> */}

        <ListBook />

        {/* <AllBooks /> */}
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </>
  );
}

export default App;
