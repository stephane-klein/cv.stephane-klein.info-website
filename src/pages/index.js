import React from 'react';
import { Helmet } from 'react-helmet';
import { navigate } from 'gatsby';

const IndexPage = () => {
    if (typeof window !== 'undefined') {
        navigate('/fr/');
    }

    return (
        <Helmet>
            <link rel='canonical' href='https://cv.stephane-klein.info/fr/' />
            <link rel='alternate' hrefLang='en-gb' href='en/' />
            <link rel='alternate' hrefLang='en-us' href='en/' />
            <link rel='alternate' hrefLang='fr-fr' href='fr/' />
        </Helmet>
    );
};

export default IndexPage;
