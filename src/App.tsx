import React from 'react';
import { Layout } from './components/layout';
import { HeroBlockView } from './components/blocks/hero';
import { ServicesBlockView } from './components/blocks/services';
import { StagesBlock } from './components/blocks/stages';
import { AboutBlockView } from './components/blocks/about';
import LinkFormBlock from './components/blocks/link-form';

const App: React.FC = () => {
  return (
    <div>
      <Layout>
        <HeroBlockView />
        <ServicesBlockView />
        <AboutBlockView />
        <StagesBlock />
        <LinkFormBlock />
      </Layout>
    </div>
  );
};

export default App;
