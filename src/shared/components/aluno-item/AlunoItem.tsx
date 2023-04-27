
import { Box, Grid } from "@mui/material";
import { AlunoView } from "../aluno-view/AlunoView";
import { ItemColumn } from "./styled";

export const AlunoItem = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={1.5}>
                    <ItemColumn>CPF</ItemColumn>
                </Grid>
                <Grid item xs={2.5}>
                    <ItemColumn>NOME</ItemColumn>
                </Grid>
                <Grid item xs={2.5}>
                    <ItemColumn>EMAIL</ItemColumn>
                </Grid>
                <Grid item xs>
                    <ItemColumn>TELEFONE</ItemColumn>
                </Grid>
                <Grid item xs>
                    <ItemColumn>DATA DE NASCIMENTO</ItemColumn>
                </Grid>
                <Grid item xs>
                    <ItemColumn>AÇÃO</ItemColumn>
                </Grid>
            </Grid>
            <AlunoView ativo={true}/>
        </Box>
    );
}