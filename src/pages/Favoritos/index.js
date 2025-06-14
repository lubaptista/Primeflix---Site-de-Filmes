import { useEffect, useState } from 'react';
import './favoritos.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])
    
    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })
        setFilmes(filtroFilmes);
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso!")
    }

    return(   
        <div className='meus-filmes'>
            <h1>Meus Filmes Favoritos</h1>
            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :</span>}
            <ul>
                {filmes.map((filme) => {
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </li>  
                    )
                })}
            </ul>
        </div>   
    );
}

export default Favoritos;