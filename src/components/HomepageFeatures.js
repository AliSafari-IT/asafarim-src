import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Programming Topics',
    Svg: require('../../static/img/coding.svg').default,
    description: (
      <>
        <a href="/docs/intro">Topics</a> section is where the main concepts and codes are presented.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/wm.svg').default,
    description: (
      <>
        Blog section lets you focus on the goals and the route to gain progress in coding area.
      </>
    ),
  }
  // {
  //   title: 'Powered by React',
  //   Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
