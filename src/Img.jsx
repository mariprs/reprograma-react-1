import minhaFoto from './assets/Foto.jpg'

function Img(props) {
    return (
        <img src={minhaFoto} className={props.estilo} alt="Foto de Mariana" />
    )
   }

   export default Img 