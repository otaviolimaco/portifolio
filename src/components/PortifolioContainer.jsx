import { PortifolioContainerStyles } from "../styles/portifoliocontainer"
import Picture from '../assets/Picture.jpeg'
import { FaInstagram, FaGithub } from "react-icons/fa";

function PortifolioContainer() {
    return (
        <PortifolioContainerStyles>
            <img src={Picture} alt="Picture" />
            <h1>Otávio Lima</h1>
            <p>
                Me chamo Otávio, atualmente estudo
            </p>
            <p>front-end e sou apaixonado por tecnologia!</p>
            <span>
                <a href="https://www.instagram.com/lima7sc_/"><FaInstagram /></a>
                <a href="https://github.com/ottaviolima"><FaGithub /></a>
            </span>
            <footer>© 2024 Otávio Lima. Todos os direitos reservados.</footer>
        </PortifolioContainerStyles>
    )
}

export default PortifolioContainer