import { ContainerStyles } from "../styles/container"

function Container({ children }) {
    return (
        <ContainerStyles>
            {children}
        </ContainerStyles>
    )
}

export default Container