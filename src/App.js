import './App.css';
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Page from './pages/page/page';
import ServicesSingle from './pages/services-single/ServicesSingle';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/services',
//     element: <Services />,
//   },
//   {
//     path: '/blog',
//     element: <Blog />,
//   },
//   {
//     path: '/contact',
//     element: <Contact />,
//   },
//   {
//     path: '/about',
//     element: <About />,
//   },
// ]);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services-single" element={<ServicesSingle />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages" element={<Page />} />
      </Routes>
    </>
  );
  // return <RouterProvider routes={router} />;
}

export default App;
