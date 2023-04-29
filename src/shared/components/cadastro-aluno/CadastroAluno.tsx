import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { BoxText, Container, Form, Span } from "./styled"

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
    ativo: boolean;
    endereco: IEnderecoAluno;
}
/* ######## SCHEMA DE VALIDAÇÃO - YUP ######## */
const createAlunoFormSchema = yup.object().shape({
    nome: yup.string().required("Digite seu nome").min(3, "Nome deve ter no mínimo 3 caracteres"),
    email: yup.string().required("Digite seu email").email("Insira um email válido"),
    dataDeNascimento: yup.string().required("Digite sua data de nascimento"),
    telefone: yup.string().required("Digite seu telefone de contato"),
    cpf: yup.string().required("Digite seu Cpf"),
    cep: yup.string(),
    bairro: yup.string(),
    rua: yup.string(),
    cidade: yup.string(),
    estado: yup.string(),
    complemento: yup.string(),
});

export const CadastroAluno = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<IAluno>({
        resolver: yupResolver(createAlunoFormSchema)
    })

    const myHandleSubmit = () => {
        
        const endereco: IEnderecoAluno ={
            cep: watch("endereco.cep"),
            bairro: watch("endereco.bairro"),
            rua: watch("endereco.rua"),
            cidade: watch("endereco.cidade"),
            estado: watch("endereco.estado"),
            numero: watch("endereco.numero"),
            complemento: watch("endereco.complemento")
        }

        const aluno:IAluno = {
            nome: watch("nome"),
            email: watch("email"),
            dataDeNascimento: watch("dataDeNascimento"),
            telefone: watch("telefone"),
            cpf: watch("cpf"),
            ativo: true,
            endereco: endereco,
        }

        localStorage.setItem(aluno.cpf, JSON.stringify(aluno));
        alert("Cadastro realizado com sucesso!");
    }
    return (
        <Container>
            <Typography variant="h5">CADASTRAR ALUNO</Typography>
            <Form onSubmit={handleSubmit(myHandleSubmit)}>

                <Box display={"flex"}>
                    <Typography variant="h6" >Dados pessoais</Typography>
                </Box>

                <BoxText>
                    <TextField
                        color={errors.nome?.message ? "error" : "primary"}
                        {...register("nome")}
                        id="nome"
                        label={"Nome"}
                        variant="outlined"
                    />
                    {errors && <Span>{errors.nome?.message}</Span>}
                </BoxText>
                <BoxText>
                    <TextField
                        color={errors.email?.message ? "error" : "primary"}
                        {...register("email")}
                        fullWidth
                        id="email"
                        label="Email"
                        sx={{ margin: "10px 0 " }}
                    />
                    {errors && <Span>{errors.email?.message}</Span>}
                </BoxText>
                <BoxText>
                    <TextField
                        color={errors.dataDeNascimento?.message ? "error" : "primary"}
                        type="date"
                        {...register("dataDeNascimento")}
                        fullWidth
                        id="dataDeNascimento"

                        sx={{ margin: "10px 0 " }}
                    />
                    {errors && <Span>{errors.dataDeNascimento?.message}</Span>}
                </BoxText>
                <BoxText>
                    <TextField
                        color={errors.telefone?.message ? "error" : "primary"}
                        {...register("telefone")}
                        fullWidth
                        id="telefone"
                        label="Telefone"
                        sx={{ margin: "10px 0 " }}
                    />
                    {errors && <Span>{errors.telefone?.message}</Span>}
                </BoxText>
                <BoxText>
                    <TextField
                        color={errors.cpf?.message ? "error" : "primary"}
                        {...register("cpf")}
                        fullWidth
                        id="cpf"
                        label="CPF"
                        sx={{ margin: "10px 0 " }}
                    />
                    {errors && <Span>{errors.cpf?.message}</Span>}
                </BoxText>
                <Box display={"flex"}>
                    <Typography variant="h6" >Dados de Endereço</Typography>
                </Box>

                <TextField
                    {...register("endereco.cep")}
                    fullWidth
                    id="cep"
                    label="CEP"
                    sx={{ margin: "10px 0 " }}
                />
                <TextField
                    {...register("endereco.bairro")}
                    fullWidth
                    id="bairro"
                    label="Bairro"
                    sx={{ margin: "10px 0 " }}
                />
                <TextField
                    {...register("endereco.rua")}
                    fullWidth
                    id="rua"
                    label="Rua"
                    sx={{ margin: "10px 0 " }}
                />
                <TextField
                    {...register("endereco.cidade")}
                    fullWidth
                    id="cidade"
                    label="Cidade"
                    sx={{ margin: "10px 0 " }}
                />
                <FormControl fullWidth>
                    <InputLabel id="estadoLabel">Estado</InputLabel>
                    <Select
                        {...register("endereco.estado")}
                        labelId="estadoLabel"
                        id="estado"
                        /* value={age} */
                        label="Estado"
                    /* onChange={handleChange} */
                    >
                        <MenuItem value={"rj"}>RJ</MenuItem>
                        <MenuItem value={"sp"}>SP</MenuItem>
                        <MenuItem value={"mg"}>MG</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    id="numero"
                    label="Número"
                    sx={{ margin: "10px 0 " }}
                />

                <TextField
                    fullWidth
                    id="complemento"
                    label="Complemento"
                    multiline
                    rows={2}
                    sx={{ margin: "10px 0" }}
                />
                <Button type="submit" color="success" variant="contained" sx={{/* backgroundColor:"green", */ color: "white", marginTop: "10px" }} >Confirmar </Button>
            </Form>
        </Container>
    )
}

/// OBS: REDUZIR CÓDIGO - BOILERPLATE