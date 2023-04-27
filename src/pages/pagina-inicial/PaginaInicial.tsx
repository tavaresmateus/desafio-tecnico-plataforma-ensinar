
import { Box, Typography } from "@mui/material";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const PaginaInicial = () => {
    return (
        <LayoutBaseDePagina titulo={"Página Inicial"}>
            <Box>
                <Typography>Seja bem vindo! Clique em alunos</Typography>
            </Box>
            
        </LayoutBaseDePagina>
    );
}