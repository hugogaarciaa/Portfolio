import Image from "next/image";
import styles from './Home.module.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <div className={styles.colIzq}>
          <h1 className={styles.heading}>¡Hola! Soy Hugo Garcia</h1>
        </div>
        <div className={styles.colDer}>
          <p className={styles.paragraph}>
            Soy un desarrollador web apasionado por crear experiencias
            digitales asombrosas.
          </p>
          <div className={styles.RRDD}>
            <a
              className={styles.button}
              href="https://www.linkedin.com/in/hugogarcia-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" style={{ fontSize: '32px' }}></i>
            </a>
            <a
              className={styles.button}
              href="https://github.com/hugogaarciaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" style={{ fontSize: '32px' }}></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.hab}>
          <h2 className={styles.heading}>Habilidades</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <i className="fab fa-html5"></i>
            </li>
            <li className={styles.listItem}>
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className={styles.listItem}>
              <i className="fab fa-js"></i>
            </li>
            <li className={styles.listItem}>
              <i className="fab fa-react"></i> 
            </li>
            <li className={styles.listItem}>
              <i className="fab fa-java"></i> 
            </li>
            <li className={styles.listItem}>
              <i className="fab fa-python"></i>
            </li>
            <li className={styles.listItem}>
              <i className="fa fa-android"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
