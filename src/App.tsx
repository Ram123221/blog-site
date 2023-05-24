import './App.scss'
import Navbar from './components/Header/Navbar/Navbar';
import Footer from "./components/Footer/Footer.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blog from './components/Body/Blog/Blog.tsx';
import SinglePost from './components/Body/SinglePost/SinglePost.tsx';
import SearchResult from './components/Body/SearchResult/SearchResult.tsx';
import About from './components/Body/About/About.tsx';
import Contact from './components/Body/Contact/Contact.tsx';
import Error from './components/Body/Error/Error.tsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      
      {/*router */}
        <Routes>
          <Route path="/">
            <Route index element={<Blog />} />
            <Route path='single-post' element={<SinglePost />} />
            <Route path='search-result' element={<SearchResult />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>

      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
