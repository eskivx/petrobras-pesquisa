import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../../componentes/Navbar'
import '../../index.css'
import { useAuth, login, getUserEmail } from '../../auth';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';



const LoggedInAcessar = () => {

    const [respostas, setRespostas] = useState([]);
    const [respostas2, setRespostas2] = useState([]);
    const [respostas3, setRespostas3] = useState([]);
    const [respostas4, setRespostas4] = useState([]);
    const [respostas5, setRespostas5] = useState([]);
    const [respostas6, setRespostas6] = useState([]);
    const [respostas7, setRespostas7] = useState([]);
    const [respostas8, setRespostas8] = useState([]);
    const [respostas9, setRespostas9] = useState([]);
    const [respostas10, setRespostas10] = useState([]);







useEffect(
    () => {
        
        fetch('http://localhost:5000/questionario/questionario/q1')
            .then(res => res.json())
            .then(data => {
                
                setRespostas(data)
            })
            .catch(err => console.log(err))
        fetch('http://localhost:5000/questionario/questionario/q2')
            .then(res => res.json())
            .then(data => {
                
                setRespostas2(data)
            })
            .catch(err => console.log(err))
        fetch('http://localhost:5000/questionario/questionario/q3')
            .then(res => res.json())
            .then(data => {
                
                setRespostas3(data)
            })
            .catch(err => console.log(err))
        fetch('http://localhost:5000/questionario/questionario/q4')
            .then(res => res.json())
            .then(data => {
                
                setRespostas4(data)
            })
            .catch(err => console.log(err))
        fetch('http://localhost:5000/questionario/questionario/q5')
            .then(res => res.json())
            .then(data => {
                
                setRespostas5(data)
            })
            .catch(err => console.log(err))
        fetch('http://localhost:5000/questionario/questionario/q6')
            .then(res => res.json())
            .then(data => {
                
                setRespostas6(data)
            })
            .catch(err => console.log(err))
        fetch('http://localhost:5000/questionario/questionario/q7')
            .then(res => res.json())
            .then(data => {
                
                setRespostas7(data)
            })
            .catch(err => console.log(err))
        fetch('http://localhost:5000/questionario/questionario/q8')
            .then(res => res.json())
            .then(data => {
                
                setRespostas8(data)
            })
            .catch(err => console.log(err))
        fetch('http://localhost:5000/questionario/questionario/q9')
            .then(res => res.json())
            .then(data => {
                
                setRespostas9(data)
            })
            .catch(err => console.log(err))
        fetch('http://localhost:5000/questionario/questionario/q10')
            .then(res => res.json())
            .then(data => {
            
                setRespostas10(data)
            })
            .catch(err => console.log(err))
    },
    []);

return (
    <div className="tudo div-acessar">
        <div className="div-container gradient-background div-master">
            <div className="main-div2 justified-center my-5 round-corner">
                <div className="container" id="container-home">

                    <h1 className="my-4">Lista de respostas</h1>

                    <div className="graficos">
                        <h1>Pergunta 1</h1>
                        <BarChart width={480} height={150} data={respostas}>
                            <XAxis dataKey="valor" />
                            <YAxis />
                            <Bar dataKey="frequencia" barSize={30} fill="#8884d8"
                                label={"teste"} />
                        </BarChart>
                        <h1>Pergunta 2</h1>
                        <BarChart width={480} height={180} data={respostas2}>
                            <XAxis dataKey="valor" />
                            <YAxis />
                            <Bar dataKey="frequencia" barSize={30} fill="#8884d8"
                                label={"teste"} />
                        </BarChart>
                        <h1>Pergunta 3</h1>
                        <BarChart width={480} height={150} data={respostas3}>
                            <XAxis dataKey="valor" />
                            <YAxis />
                            <Bar dataKey="frequencia" barSize={30} fill="#8884d8"
                                label={"teste"} />
                        </BarChart>
                        <h1>Pergunta 4</h1>
                        <BarChart width={480} height={150} data={respostas4}>
                            <XAxis dataKey="valor" />
                            <YAxis />
                            <Bar dataKey="frequencia" barSize={30} fill="#8884d8"
                                label={"teste"} />
                        </BarChart>
                        <h1>Pergunta 5</h1>
                        <BarChart width={480} height={150} data={respostas5}>
                            <XAxis dataKey="valor" />
                            <YAxis />
                            <Bar dataKey="frequencia" barSize={30} fill="#8884d8"
                                label={"teste"} />
                        </BarChart>
                        <h1>Pergunta 6</h1>
                        <BarChart width={480} height={150} data={respostas6}>
                            <XAxis dataKey="valor" />
                            <YAxis />
                            <Bar dataKey="frequencia" barSize={30} fill="#8884d8"
                                label={"teste"} />
                        </BarChart>
                        <h1>Pergunta 7</h1>
                        <BarChart width={480} height={150} data={respostas7}>
                            <XAxis dataKey="valor" />
                            <YAxis />
                            <Bar dataKey="frequencia" barSize={30} fill="#8884d8"
                                label={"teste"} />
                        </BarChart>
                        <h1>Pergunta 8</h1>
                        <BarChart width={480} height={150} data={respostas8}>
                            <XAxis dataKey="valor" />
                            <YAxis />
                            <Bar dataKey="frequencia" barSize={30} fill="#8884d8"
                                label={"teste"} />
                        </BarChart>
                        <h1>Pergunta 9</h1>
                        <BarChart width={480} height={150} data={respostas9}>
                            <XAxis dataKey="valor" />
                            <YAxis />
                            <Bar dataKey="frequencia" barSize={30} fill="#8884d8"
                                label={"teste"} />
                        </BarChart>
                        <h1>Pergunta 10</h1>
                        <BarChart width={480} height={150} data={respostas10}>
                            <XAxis dataKey="valor" />
                            <YAxis />
                            <Bar dataKey="frequencia" barSize={30} fill="#8884d8"
                                label={"teste"} />
                        </BarChart>

                    </div>



                </div>
            </div>
        </div>
    </div>
)};


const LoggedOutAcessar = () => {
    return (
        <div className="tudo div-master">
            <div className="div-container gradient-background div-master">
                <div className="main-div justified-center my-5 round-corner">
                    <div className="container" id="container-home">
                        <h1 className="my-4" id="h1-home">Somente admininstradores podem acessar esta página</h1>
                        <h2 className="my-4">Se você é um admininstrador e não consegue acessar esta pagina contate o suporte</h2>
                        
                        <Link to="/">Voltar para a Home</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export function AcessarRespostas() {

    const [logged] = useAuth();
    const [ehadmin, setEhadmin] = useState(false);

    useEffect(() => {
        if (logged) {
            fetch('http://localhost:5000/auth/check/' + getUserEmail())
                .then(res => res.json())
                .then(data => {
                    if (data.ehadmin !== undefined) {
                        setEhadmin(data.ehadmin);
                    }
                })
                .catch(err => console.log(err));
        }
    }, [logged]);

    return (
        <>

            <Navbar />

            {ehadmin ? <LoggedInAcessar /> : <LoggedOutAcessar />}


        </>
    );
}