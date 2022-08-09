import styles from '../styles/about.module.css';
import styles_sass from '../styles/about.module.scss';
const About = () => {
  return (
    <>
      <h1 className={styles.highlight}>About</h1>
      <h1 className={styles_sass.highL}>About with sass</h1>
    </>
  );
};

export default About;
