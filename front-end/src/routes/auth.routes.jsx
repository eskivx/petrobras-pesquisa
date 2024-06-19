import { Routes, Route } from 'react-router-dom'


import { Home } from '../pages/Home'
import { Cadastro } from '../pages/Cadastro'
import { Login } from '../pages/Login'
import { Perfil_acessar} from '../pages/Perfil-acessar'
import { Perfil_alterar } from '../pages/Perfil-alterar'
import { Pesquisa } from '../pages/Pesquisa'




export function AuthRoutes() {
 return (

    // aqui estou criando as rotas, estou certificando que quando a url mudar no navegador, o router irá renderizar as paginas seguinte de acordo com a url
   <Routes> 
     <Route path="/" element={<Home />} />
     <Route path="/cadastro" element={<Cadastro />} />
     <Route path='/login' element={<Login/>}/>
     <Route path='/perfil-acessar' element={<Perfil_acessar/>}/>
     <Route path='/perfil-alterar' element={<Perfil_alterar/>}/>
     <Route path='/pesquisa' element={<Pesquisa/>}/>
   </Routes>
 )
}
