import { } from 'react'
import Tito from './assets/Tito.jpg'
import Cesar from './assets/Julius Cesar.webp'
import Flavius from './assets/flavius josephus.jpg'
import Vespasian from './assets/vespasiano.jpg'

function Produtos(){
    return(
        <>
        <img src={Tito} alt="Titus" />
        <br />
        <img src={Cesar} alt="Julius Cesar" />
        <br />
        <img src={Flavius} alt="Flavius Josephus" />
        <br />
        <img src={Vespasian} alt="Vespasiano" />
        </>
    )
}
export default Produtos