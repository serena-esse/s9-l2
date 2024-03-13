import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasyBooks from "./books/fantasy.json";
import horrorBooks from "./books/horror.json";

function App() {
  return (
    <div>
      {/*  <MyNav />
      
      <Welcome />
      <AllTheBooks />
      <MyFooter />
      <SingleBook book={fantasyBooks[0]} />
       <BookList books={fantasyBooks} />
       */}

      <BookList books={fantasyBooks} />
    </div>
  );
}

export default App;
