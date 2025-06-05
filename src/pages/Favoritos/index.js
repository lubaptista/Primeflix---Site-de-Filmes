import './favoritos.css'

function Favoritos() {
    const minhaLista = JSON.parse(localStorage.getItem("@primeflix"));

  return(
    <div>
        {minhaLista ? (
            <div>
                <h1>Filmes Favoritos</h1>
                {minhaLista.map((meuFilme) => {
                    return(
                      <h3>{meuFilme.title}</h3>  
                    )
                })}
            </div>
        ) : (
            <h1>Não existem Filmes Favoritos</h1>
        )}
        
    </div>
    
  );
}

export default Favoritos;