import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid } from "@mui/material";
import { ItemColumn, SubContainer, Item, ButtonDelete, ButtonEdit } from "./styled";
import { useEffect, useState } from "react";

interface IEnderecoAluno {
    cep: string;
    bairro: string;
    rua: string;
    cidade: string;
    estado: string;
    numero: string;
    complemento: string;
}

interface IAluno {
    nome: string;
    email: string;
    dataDeNascimento: string;
    telefone: string;
    cpf: string;
    endereco: IEnderecoAluno;
    ativo: boolean;
}

export const AlunoItem = () => {

    const [alunos, setAlunos] = useState<any>([])
    useEffect(() => {
        function allStorage() {
            var alunosArray = [],
                keys = Object.keys(localStorage),
                i = 0, key;

            for (; key = keys[i]; i++) {
                alunosArray.push(JSON.parse(localStorage.getItem(key) || ""));
            }
            setAlunos(alunosArray);
        }
        allStorage()

    }, []);

    // EXCLUSÃO LÓGICA
    const deleteByCpf = (aluno: IAluno) => {
        var deletar = window.confirm("Deseja mesmo deletar este aluno?");
            
        if(deletar){
            aluno.ativo = false;
            localStorage.setItem(aluno.cpf,JSON.stringify(aluno))
        }else{
            return undefined;
        }
             
    }
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
            {/* LINHAS */}
            <SubContainer>
                {
                    alunos.length < 1 && <Box marginTop={5} display={"flex"} justifyContent={"center"}>Nenhum aluno adicionado</Box>
                }
                {alunos.length > 0 &&
                    alunos.filter((aluno: { ativo: boolean; }) => aluno.ativo === true).map((aluno: IAluno) => {

                        return (
                            <Grid key={aluno.cpf} container sx={{ border: "1px solid #F5F9FF" }}>

                                <Grid item xs={1.5}>
                                    <Item>{aluno.cpf}</Item>
                                </Grid><Grid item xs={2.5}>
                                    <Item>{aluno.nome}</Item>
                                </Grid><Grid item xs={2.5}>
                                    <Item>{aluno.email}</Item>
                                </Grid><Grid item xs>
                                    <Item>{aluno.telefone}</Item>
                                </Grid><Grid item xs>
                                    <Item>{aluno.dataDeNascimento}</Item>
                                </Grid>
                                <Grid item xs>
                                    <Item>
                                        <ButtonDelete onClick={() => deleteByCpf(aluno)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </ButtonDelete>
                                        <ButtonEdit>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </ButtonEdit>
                                    </Item>
                                </Grid>

                            </Grid>)
                    })
                }
            </SubContainer>
        </Box>
    );
}