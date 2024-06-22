import { Routes, Route } from 'react-router-dom'


import { Home } from '../pages/Home'
import { Cadastro } from '../pages/Cadastro'
import { Login } from '../pages/Login'
import { Perfil_acessar} from '../pages/Perfil-acessar'
import { Perfil_alterar } from '../pages/Perfil-alterar'
import { Pesquisa } from '../pages/Pesquisa'
import { Pergunta2 } from '../pages/Pergunta2'
import { Pergunta3 } from '../pages/Pergunta3'
import { Pergunta4 } from '../pages/Pergunta4'
import { Pergunta5 } from '../pages/Pergunta5'
import { Pergunta6 } from '../pages/Pergunta6'
import { Pergunta7 } from '../pages/Pergunta7'
import { Pergunta8 } from '../pages/Pergunta8'
import { Pergunta9 } from '../pages/Pergunta9'
import { Pergunta10 } from '../pages/Pergunta10'




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
     <Route path='/pergunta2' element={<Pergunta2/>}/>
     <Route path='/pergunta3' element={<Pergunta3/>}/>
     <Route path='/pergunta4' element={<Pergunta4/>}/>
     <Route path='/pergunta5' element={<Pergunta5/>}/>
     <Route path='/pergunta6' element={<Pergunta6/>}/>
     <Route path='/pergunta7' element={<Pergunta7/>}/>
     <Route path='/pergunta8' element={<Pergunta8/>}/>
     <Route path='/pergunta9' element={<Pergunta9/>}/>
     <Route path='/pergunta10' element={<Pergunta10/>}/>
   </Routes>
 )
}
