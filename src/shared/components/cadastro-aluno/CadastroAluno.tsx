import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
/* import { Button1 } from "../Buttons/Button1" */
import { Container, Form } from "./styled"

export const CadastroAluno = () => {
    return (
        <Container>
            <Typography variant="h5">CADASTRAR ALUNO</Typography>
            <Form>

                <Box display={"flex"}>
                    <Typography variant="h6" >Dados pessoais</Typography>
                </Box>

                <TextField
                    fullWidth
                    id="nome"
                    label="Nome"
                    sx={{ margin: "10px 0 " }}
                />
                <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    sx={{ margin: "10px 0 " }}
                />
                <TextField
                    fullWidth
                    id="data"
                    label="Data de Nascimento"
                    sx={{ margin: "10px 0 " }}
                />
                <TextField
                    fullWidth
                    id="telefone"
                    label="Telefone"
                    sx={{ margin: "10px 0 " }}
                />
                <TextField
                    fullWidth
                    id="cpf"
                    label="CPF"
                    sx={{ margin: "10px 0 " }}
                />

                <Box display={"flex"}>
                    <Typography variant="h6" >Dados de Endereço</Typography>
                </Box>

                <TextField
                    fullWidth
                    id="cep"
                    label="CEP"
                    sx={{ margin: "10px 0 " }}
                />
                <TextField
                    fullWidth
                    id="bairro"
                    label="Bairro"
                    sx={{ margin: "10px 0 " }}
                />
                <TextField
                    fullWidth
                    id="rua"
                    label="Rua"
                    sx={{ margin: "10px 0 " }}
                />
                <TextField
                    fullWidth
                    id="cidade"
                    label="Cidade"
                    sx={{ margin: "10px 0 " }}
                />
                <FormControl fullWidth>
                    <InputLabel id="estado">Estado</InputLabel>
                    <Select

                        labelId="estado"
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
                <Button type="submit" color="success" variant="contained" sx={{/* backgroundColor:"green", */ color:"white", marginTop:"10px"}} >Confirmar </Button>
            </Form>
        </Container>
    )
}