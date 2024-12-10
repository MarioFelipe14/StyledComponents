import styles from './Hero.module.css'
import { Form, HeroTitle } from './Hero.module'

const Hero = () => (
  <Form className={styles.form}>
    <div className="container">
      <HeroTitle className={styles.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </Form>
)

export default Hero
