import { Box, Grid, Typography } from "@mui/material";
import { ButtonDelete, ButtonEdit, ItemColumn, Item as ItemSC, SubContainer } from "./styled";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import ModalAluno from "../modal-aluno/ModalAluno";

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
interface IAtivoProps {
    ativo: boolean
}

export const AlunoView = ({ ativo }: IAtivoProps) => {
    const [alunos, setAlunos] = useState<string[]>([])

    const handleAluno = () => {
        setAlunos();
        console.log(alunos)
    }

    useEffect(() => {
        console.log(alunos)
        handleAluno()
    }, [alunos]);

    const deleteByCpf = (aluno: IAluno) => {
        var deletar = window.confirm("Deseja mesmo deletar este aluno?");

        if (deletar) {
            aluno.ativo = false;
            localStorage.setItem(aluno.cpf, JSON.stringify(aluno))
        }
    }

    const [open, setOpen] = useState(false);
    const handleOpenModal = (cpf: string) => {
        console.log(cpf)
        setOpen(true)
    };
    const handleCloseModal = () => setOpen(false);

    return (
        <SubContainer>
            {
                /* alunos.filter((aluno: { ativo: boolean; }) => aluno.ativo === true) < 1 &&  */<Box marginTop={5} display={"flex"} justifyContent={"center"}>Nenhum aluno ativo</Box>
            }
            {alunos.length > 0 && ativo === true &&
                alunos.filter((aluno:IAluno)=> aluno.ativo === ativo).map((aluno:IAluno) => {

                    return (

                        <Grid key={aluno.cpf} container sx={{ border: "1px solid #F5F9FF" }}>
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
                            <Grid item xs={1.5}>
                                <ItemSC>{aluno.cpf}</ItemSC>
                            </Grid><Grid item xs={2.5}>
                                <ItemSC>{aluno.nome}</ItemSC>
                            </Grid><Grid item xs={2.5}>
                                <ItemSC>{aluno.email}</ItemSC>
                            </Grid><Grid item xs>
                                <ItemSC>{aluno.telefone}</ItemSC>
                            </Grid><Grid item xs>
                                <ItemSC>{aluno.dataDeNascimento}</ItemSC>
                            </Grid>
                            <Grid item xs>
                                <ItemSC>
                                    <ButtonDelete onClick={() => deleteByCpf(aluno)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </ButtonDelete>
                                    <ButtonEdit onClick={() => handleOpenModal(aluno.cpf)}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </ButtonEdit>
                                </ItemSC>
                            </Grid>

                        </Grid>)
                })
            }
            <ModalAluno handleClose={handleCloseModal} open={open}>
                <Box sx={{ height: 500 }}>
                    <Typography>Em construção</Typography>
                </Box>
            </ModalAluno>
        </SubContainer>
    );
}