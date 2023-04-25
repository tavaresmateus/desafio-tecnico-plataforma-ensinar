import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";


export const AppRoutes = () =>{
    const {toggleDrawerOpen} = useDrawerContext();
    return(
        <Routes>
            <Route path="/inicio" element={<Button onClick={toggleDrawerOpen} />}/>
            {<Route path="*" element={<Navigate to={"/inicio"} />} />}
        </Routes>
    );
}