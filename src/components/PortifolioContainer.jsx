import { PortifolioContainerStyles } from "../styles/portifoliocontainer"
import Picture from '../assets/Picture.jpeg'

function PortifolioContainer() {
    return (
        <PortifolioContainerStyles>
            <img src={Picture} alt="Picture" />
            <h1>Otávio Lima</h1>
        </PortifolioContainerStyles>
    )
}

export default PortifolioContainer