import { Box, Grid, TextField, Typography } from "@mui/material";
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



export const AlunoView = () => {
    const [alunos, setAlunos] = useState<IAluno[]>([]);
    const [aluno, setAluno] = useState<IAluno>();
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [dataDeNascimento, setDataDeNascimento] = useState("")


    useEffect(() => {
        try {
            var listaDeAlunos: IAluno[] = []
            Object.values(localStorage).map((aluno) => {
                var alunoJSON = JSON.parse(aluno);
                listaDeAlunos.push(alunoJSON);
            })
            setAlunos(listaDeAlunos)

        } catch (error) {
            console.log(error)
        }

    }, [])

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
        setAluno(JSON.parse(localStorage.getItem(cpf) || ""));
        
        setOpen(true)   
    };
    const handleCloseModal = () => setOpen(false);

    return (
        <SubContainer>
            {
                alunos.filter((aluno) => aluno.ativo === true).length < 1 && <Box marginTop={5} display={"flex"} justifyContent={"center"}>Nenhum aluno</Box>

            }
            {alunos.length > 0 &&
                alunos.filter((aluno: IAluno) => aluno.ativo === true).map((aluno) => {

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
                <Box sx={{ height: 500, width:"100%", overflow:"auto" }}>
                    <Typography> Nome</Typography>
                    <TextField id="nome"  defaultValue={aluno?.nome} fullWidth />
                   
                    <Typography> Email</Typography>
                    <TextField id="email"  defaultValue={aluno?.email} fullWidth />
                   
                    <Typography> Data de Nascimento</Typography>
                    <TextField id="dataDeNascimento" defaultValue={aluno?.dataDeNascimento} fullWidth />
                   
                    <Typography> Telefone</Typography>
                    <TextField id="telefone"  defaultValue={aluno?.telefone} fullWidth />
                   
                    <Typography>CEP</Typography>
                    <TextField id="cep"  defaultValue={aluno?.endereco.cep} fullWidth />
                   
                    <Typography> Bairro</Typography>
                    <TextField id="bairro"  defaultValue={aluno?.endereco.bairro} fullWidth />
                    
                   <Typography> Cidade</Typography>
                    <TextField id="cidade"  defaultValue={aluno?.endereco.cidade} fullWidth />
                   
                   <Typography> Rua</Typography>
                    <TextField id="rua"  defaultValue={aluno?.endereco.rua} fullWidth />
                   
                   <Typography> Estado</Typography>
                    <TextField id="cidade"  defaultValue={aluno?.endereco.estado} fullWidth />


                </Box>
            </ModalAluno>
        </SubContainer>
    );
}