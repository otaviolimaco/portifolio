import { PortifolioContainerStyles } from "../styles/portifoliocontainer"
import Picture from '../assets/Picture.jpeg'
import { FaInstagram, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiReact } from "react-icons/si";

function PortifolioContainer() {
    return (
        <PortifolioContainerStyles>
            <img src={Picture} alt="Picture" />
            <h1>Otávio Lima</h1>
            <p>
                Me chamo Otávio, atualmente estudo
            </p>
            <p>front-end e sou apaixonado por tecnologia!</p>
            <span className="span_2">
                <a className="a_2" alt="React"><SiReact /></a>
                <a className="a_3" alt="Ts"><SiTypescript /></a>
                <a className="a_4" alt="Git"><FaGitAlt /></a>
            </span>
            <span className="span_1">
                <a href="https://www.instagram.com/lima7sc_/"><FaInstagram /></a>
                <a href="https://github.com/otaviodevzl"><FaGithub /></a>
            </span>
            <footer>© 2024 Otávio Lima. Todos os direitos reservados.</footer>
        </PortifolioContainerStyles>
    )
}

export default PortifolioContainer