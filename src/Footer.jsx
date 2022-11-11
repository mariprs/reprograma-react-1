function Footer (props){
    return(
        <footer content={props.txt}>
            <p>Feito por <a href={props.link} /></p>
        </footer>
    )
}

export default Footer