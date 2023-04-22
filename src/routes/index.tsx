import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/inicio" element={<p>pagina inicial</p>}/>
            <Route path="*" element={<Navigate to={"/inicio"} />} />
        </Routes>
    );
}