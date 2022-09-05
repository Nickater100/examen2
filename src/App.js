import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Form from "./components/Form"

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/form" element={<Form/>}/>
        </Routes>  
    </div>
    </Router>
  );
}

export default App;