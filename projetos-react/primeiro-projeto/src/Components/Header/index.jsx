import "./style.css";

export default function Header(props) {
    /*
      Props Cria propriedades no componentes
    */

    console.log(props);

    return (
      <header>
        <h1>{props.title}</h1>
      </header>
    )

}
