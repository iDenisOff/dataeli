import React, { useEffect } from 'react';
import { Layout } from './components/layout';
import { HeroBlockView } from './components/blocks/hero';
import { ServicesBlockView } from './components/blocks/services';
import { StagesBlock } from './components/blocks/stages';
import { AboutBlockView } from './components/blocks/about';
import { useTranslation } from 'react-i18next';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import LinkFormBlock from './components/blocks/link-form';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { lng } = useParams();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:lng?" element={<LanguageSwitcher />} />
      </Routes>
      <Routes>
        <Route
          path="/:lng?"
          element={
            <div>
              <Layout>
                <HeroBlockView />
                <div id="services">
                  <ServicesBlockView />
                </div>
                <div id="about">
                  <AboutBlockView />
                </div>
                <div id="stages">
                  <StagesBlock />
                </div>
                <div id="linkForm">
                  <LinkFormBlock />
                </div>
              </Layout>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
