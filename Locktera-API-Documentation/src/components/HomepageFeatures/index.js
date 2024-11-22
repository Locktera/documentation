import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Secure Data Management',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Locktera’s API provides robust tools to manage organizational data with top-notch security.
          Safeguard sensitive information with our encryption and access control features.
      </>
    ),
  },
  {
    title: 'Streamlined User Access Control',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Manage API keys, control user permissions, and customize access rights easily.
          Locktera’s API ensures that you have complete control over who accesses your data.
      </>
    ),
  },
  {
    title: 'Efficient Resource Management',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Optimize your storage, monitor usage, and track organizational resources effortlessly.
          Locktera’s API helps you maximize efficiency with detailed reporting and customization options.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
