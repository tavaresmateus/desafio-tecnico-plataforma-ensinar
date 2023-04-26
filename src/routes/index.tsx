import { Navigate, Route, Routes } from "react-router-dom";
import { PaginaInicial } from "../pages/pagina-inicial/PaginaInicial";
import { Alunos } from "../pages/alunos/Alunos";
import { CadastroAluno } from "../shared/components";
import { AlunoItem } from "../shared/components/aluno-item/AlunoItem";


export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/inicio" element={<PaginaInicial/>}/>
            <Route path="/alunos" element={<Alunos/>}>
                <Route path="" element={<AlunoItem/>}  />
                <Route path="cadastrar" element={<CadastroAluno/>}  />
            </Route>
            {<Route path="*" element={<Navigate to={"/inicio"} />} />}
        </Routes>
    );
}