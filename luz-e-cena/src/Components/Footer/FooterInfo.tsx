import styles from './Footer.module.css';

const FooterInfo = () => {
  return (
    <div className={styles.funcionamento}>
        <h4 className={styles.funcionamento}>Funcionamento</h4>
        <span>Segunda a Sexta - 16 às 00h</span>
        <span>ola@luzcena.com.br</span>
        <span>0800 541 320</span>
    </div>
  )
}

export default FooterInfo