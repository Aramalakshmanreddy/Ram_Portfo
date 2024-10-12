
import { HashRouter,  Navigate,  Route , Routes} from 'react-router-dom';

import Layout from './pages/Layout';
import HomePage from './Home/Pages/HomePage';

import AboutPage from './About/Pages/AboutPage';
import Experience from './Experince/Pages/Experience';
import Skills from './Skills/Pages/Skills';
import Projects from './Projects/Pages/Projects';
import Contact from './Contact/Pages/Contact';

function App() {
  return (
    <>
    <HashRouter>
     <Routes>
       <Route path='/' element={<Layout />}>
         <Route index element={<Navigate to='home' />} />
          <Route path='home' element={<HomePage />} /> 
          <Route path='about' element={<AboutPage />} />
          <Route path='experience' element={<Experience />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
       </Route>
     </Routes>
    </HashRouter>
    
    </>
  )
}

export default App
