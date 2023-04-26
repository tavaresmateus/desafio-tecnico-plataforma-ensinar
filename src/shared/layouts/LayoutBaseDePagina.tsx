import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";


interface ILayoutBaseDePaginaProps {
    children: ReactNode;
    titulo: string;
}

export const LayoutBaseDePagina = ({ children, titulo }: ILayoutBaseDePaginaProps) => {

    return (
        <Box height={"100%"} display={"flex"} flexDirection={"column"} gap={1}>
            <Box padding={1} display={"flex"} alignItems={"center"}>
                <Typography variant="h5">
                    {titulo}
                </Typography>
            </Box>
            <Box>

            </Box>
            <Box>
                {children}
            </Box>

        </Box>
    );
}