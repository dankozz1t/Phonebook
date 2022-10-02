import React from 'react';

import Section from 'components/Section';
import Home from 'components/Home';

import { shallowEqual, useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/selectors';

const HomePage = () => {
  const lang = useSelector(getLanguage, shallowEqual);

  return (
    <main className="box">
      <Section title={lang.home_greeting}>
        <Home />
      </Section>
    </main>
  );
};
export default HomePage;
