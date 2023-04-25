import { Avatar, Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";
import logo from "../../../static/images/logo-ensinar.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
    children: ReactNode
}

interface IListItemLinkProps {
    to: string;
    label: string;
    icon: IconProp;
    onClick: (() => void) | undefined;
}

const ListItemLink = ({to, label, icon, onClick}: IListItemLinkProps) => {
    
    const navigate = useNavigate();
    const resolvedPath = useResolvedPath(to);
    
    const match = useMatch(to);

    const handleClick = () => {
        navigate(to);
        onClick?.(); // se funcao undefined nao faz nada, caso contrario executa parametro dentro de onclick
    }
    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <FontAwesomeIcon icon={icon} />
            </ListItemIcon>
            <ListItemText>{label}</ListItemText>
        </ListItemButton>
    );
}

export const MenuLateral = ({ children }: Props) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm')); // retorna true se menor que sm ( sm <= 600px)
    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(25)} height="100%" display="flex" flexDirection="column" >

                    <Box width={"100%"} height={theme.spacing(20)} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Avatar src={logo}
                            sx={{ width: 100, height: 100 }}
                        />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemLink 
                            onClick={smDown ? toggleDrawerOpen : undefined}
                            to={"/inicio"} 
                            label={"Inicio"} 
                            icon={faHome}/>
                            <ListItemLink 
                            onClick={smDown ? toggleDrawerOpen : undefined}
                            to={"/alunos"} 
                            label={"Alunos"} 
                            icon={faGraduationCap}/>
                        </List>
                    </Box>
                </Box>

            </Drawer>

            <Box height={"100vh"} marginLeft={smDown ? 0 : theme.spacing(25)}>
                {children}
            </Box>

        </>
    );
}