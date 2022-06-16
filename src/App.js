import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Container from './page/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Container />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

