import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import styles from "./Newsletter.module.css";

const Newslleter = () => {
  return (
    <section className={styles.newsletter}>
        <h2 className={styles.titulo}>Inscreva-se para ganhar descontos!</h2>
        <form className={styles.form}>
            <Fieldset>
                <InputText placeholder="Digite o seu melhor email" />
                <Button variant="default" type="submit">Inscreva-se</Button>
            </Fieldset>
        </form>
    </section>
  )
}

export default Newslleter