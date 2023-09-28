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
import PageNotFound from './pages/PageNotFound';
import OurTeam from './pages/OurTeam';
import Project from './pages/Project';
import ProjectDetails from './pages/ProjectDetails';

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
        <Route path="/team" element={<OurTeam />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project-detail" element={<ProjectDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
  // return <RouterProvider routes={router} />;
}

export default App;
