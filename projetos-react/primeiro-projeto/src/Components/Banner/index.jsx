export default function(props) {

    /*
        O children permite que você passe e rederize
        conteúdo dinâmico dentro de um componente em React
    */

    return (
        <div className="bannerStyle">
            {props.children}
        </div>
    )
}