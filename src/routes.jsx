import {BrowserRouter, Route, Routes} from 'react-router-dom'

//mapear as páginas da pasta Pages
import Home from './Pages/Home/Home'
import Sobre from './Pages/Sobre/Sobre'
import Projetos from './Pages/Projetos/Projetos'
import Contatos from './Pages/Contatos/Contatos'

//função 
function AppRoutes()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/sobre" element={ <Sobre /> } ></Route>
                <Route path="/projetos" element={ <Projetos /> } ></Route>
                <Route path="/contatos" element={ <Contatos /> } ></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes