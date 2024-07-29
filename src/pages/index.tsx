import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <div>
      <div className={styles.buttons}>
        <p style={{fontSize:"20px",textAlign:"center"}}>
          This page contains all the docs for 1D6, as well as all the side projects.<br />
          Below you can find all the resources a new 1D6 developer will need, but don't fear asking questions in our Discord or Matrix!<br />
        </p>
      </div>
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Modding and Internals
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            1D6 Accounts and Mods API
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Javascript Modding SDK
          </Link>
        </div>
    </div>
  )
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
