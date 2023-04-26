import { LayoutBaseDePagina } from "../../shared/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ContainerHead, ButtonLink, Button } from "./styles";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

interface IButtonItemProps {
    titulo: string;
    to: string;
}

const ButtonItem = ({titulo, to}:IButtonItemProps) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    }

    return (
    <ButtonLink onClick={handleClick}>
        <Typography variant="h6">{titulo}</Typography>
    </ButtonLink>
    );
}

export const Alunos = () => {


    return (
        <LayoutBaseDePagina titulo="Alunos">
            <Box>
                <ContainerHead>
                    <NavLink to={"cadastrar"}>
                        <Button><FontAwesomeIcon icon={faPlus} /></Button>
                    </NavLink>

                    <ButtonItem to="/alunos" titulo="Todos os alunos"/>
                    <ButtonItem to="/alunos" titulo="Ativos" />
                    <ButtonItem to="/alunos" titulo="Inativos" />
                </ContainerHead>
            </Box>
            <Outlet/>
        </LayoutBaseDePagina>
    );
}