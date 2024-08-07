import { useState } from 'react';
import Navbar from './components/ui/Navbar';
import Layout from './components/ui/Layout';
import Settings from './components/Settings';
import Modal from './components/ui/Modal';
import SettingsProvider from './context/SettingsContext';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <SettingsProvider>
      {openModal && (
        <Modal setIsOpen={setOpenModal}>
          <Settings setIsOpen={setOpenModal} />
        </Modal>
      )}
      <Layout>
        <Navbar openSettings={() => setOpenModal(true)} />
        <div className="w-full h-full flex flex-col z-10">
          <section id="home">
            <Home />
          </section>
          <section id="about-me">
            <AboutMe />
          </section>
          <section id="work">
            <Work />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </Layout>
    </SettingsProvider>
  );
}

export default App;
