import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { MenuLateral } from "./shared/components"
import { AppDrawerProvider } from "./shared/contexts"

function App() {

  return (
    <AppDrawerProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppDrawerProvider>
  )
}

export default App
