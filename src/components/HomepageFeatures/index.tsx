import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ConceptFeatures from '../Concepts';
import Comparison from '../Concepts';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Create',
    Svg: require('@site/static/img/create.svg').default,
    description: (
      <>
        Establish REST endpoints, define authentication with built-in functionality, and validate your data.
      </>
    ), 
  },
  {
    title: 'Build',
    Svg: require('@site/static/img/build.svg').default,
    description: (
      <>
        Combine APIs, third-party tools, database queries seamlessly, enabling smooth data flow and interaction.
      </>
    ), 
  },
  {
    title: 'Deploy',
    Svg: require('@site/static/img/deploy.svg').default,
    description: (
      <>
        Go live in seconds with a single click, eliminating the need for devops tasks. Our platform handles hosting for you.
      </>
    ),
  },
  {
    title: 'Scale',
    Svg: require('@site/static/img/scale.svg').default,
    description: (
      <>
        Build applications that can effortlessly scale to accommodate growing user bases and increased demand.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col-2')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container"> 
        <Heading as="h1">From Concept to API in Minutes</Heading> 
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div> 
        <br />
        <Comparison />
      </div>
    </section>
  );
}
