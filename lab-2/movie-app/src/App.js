// Style
import './App.css';

// Importing necessary components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      {/* Wrapping the app with Router to enable routing */}
      <Router>
        {/* Navigation bar visible across all routes */}
        <NavigationBar />
        {/* Defining route paths and the components they should render */}
        <Routes>
          <Route path="/home" element={<Content />} />
          <Route path="/read" element={<Footer />} />
          <Route path="/create" element={<Header />} />
        </Routes>
        {/* Static components rendered below the routed content */}
        <Header />
        <Content />
        <Footer />
      </Router>
    </div>
  );
}

export default App;