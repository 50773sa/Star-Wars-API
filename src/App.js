import React from 'react'
import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import AllFilmsPage from './pages/AllFilmsPage'
import SingleFilmPage from './pages/SingleFilmPage'
import AllPeoplePage from './pages/AllPeoplePage'
import SinglePersonPage from './pages/SinglePersonPage'

// styles
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';


function App() {
  return (
    <div id="App">
		<Navigation />
		<Container className='main-wrapper'>
			<div className="box">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/films" element={<AllFilmsPage />} />
				<Route path="/films/:id" element={<SingleFilmPage />} />
                <Route path="/people" element={<AllPeoplePage />} />
                <Route path="/people/:id" element={<SinglePersonPage />} />				
			</Routes>
			</div>
		</Container>  
    </div>
  );
}

export default App;
