import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // standardowy router do wyświeltania ścieżki
// import { MemoryRouter as Router, Route } from 'react-router-dom'; // nie wyświetla dla użytkownika ścieżki (ukrywa ją)
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import HomePage from './components/HomePage/HomePage';
import Menu from './components/Menu/Menu'
import MoviesListPage from './components/MoviesListPage/MoviesListPage'
import MovieDetailPage from './components/MovieDetailPage/MovieDetailPage'


function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Route exact path="/" component={HomePage} /> {/* exact - oznacza, że komponent wyświetla się tylko dla ścieżki '/' bez tego każda strona zawierająca slasha będzie wyświetlała ten komponent */}
        <Route path="/movies" component={MoviesListPage} />
        <Route path="/movie-detail/:id" component={MovieDetailPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </div>
    </Router>
  );
}

export default App;
