import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Box, Heading, Text } from 'rebass';
import CookieConsent from "react-cookie-consent";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container-fluid">
        <h1 className="hero__title" style={{ fontFamily: "Cabin Sketch, cursive, SansSerif", color: "yellow", fontSize: "3.75rem" }}>{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.button}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Topics List 📑
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ASAFARIM: Scientific Applications Developer">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CookieConsent
       // debug={true}
          location='bottom'
          buttonText='I understand'
          cookieName='<cookieName>'
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: '#4e503b', fontSize: '14px' }}
          expires={150}>
          If we use cookies, it's only for offering you a better browsing experience (find out more on  
            <Link
            className="link-button"
            to="/cookies_en">
            &nbsp;how we use cookies 🍪
          </Link> and
          <Link
            className="link-button"
            to="/eula">
            &nbsp;End-User License Agreement 📑
          </Link> ).        
        </CookieConsent>
      </main>
    </Layout>
  );
}
