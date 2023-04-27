import { Box, Grid, Stack, Typography } from "@mui/material";
import { ButtonDelete, ButtonEdit, Item as ItemSC, SubContainer } from "./styled";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ModalAluno from "../modal-aluno/ModalAluno";
import { CadastroAluno } from "..";

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
    const [alunos, setAlunos] = useState<any>([])
    function allStorage() {
        var alunosArray = [],
            keys = Object.keys(localStorage),
            i = 0, key;

        for (; key = keys[i]; i++) {
            alunosArray.push(JSON.parse(localStorage.getItem(key) || ""));
        } 
        return alunosArray;
    }
    useEffect(() => {
        setAlunos(allStorage());
    }, []);

    const deleteByCpf = (aluno: IAluno) => {
        var deletar = window.confirm("Deseja mesmo deletar este aluno?");

        if (deletar) {
            aluno.ativo = false;
            localStorage.setItem(aluno.cpf, JSON.stringify(aluno))
        } else {
            return undefined;
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
                alunos.filter((aluno: { ativo: boolean; }) => aluno.ativo === true) < 1 && <Box marginTop={5} display={"flex"} justifyContent={"center"}>Nenhum aluno ativo</Box>
            }
            {alunos.length > 0 && ativo === true &&
                alunos.filter((aluno: { ativo: boolean; }) => aluno.ativo === true).map((aluno: IAluno) => {

                    return (
                        <Grid onClick={() => handleOpenModal(aluno.cpf)} key={aluno.cpf} container sx={{ border: "1px solid #F5F9FF" }}>

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
                                    <ButtonEdit>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </ButtonEdit>
                                </ItemSC>
                            </Grid>

                        </Grid>)
                })
            }
            <ModalAluno handleClose={handleCloseModal} open={open}>
                <Box sx={{ height:500}}>
                    <CadastroAluno/>
                </Box>
            </ModalAluno>
        </SubContainer>
    );
}