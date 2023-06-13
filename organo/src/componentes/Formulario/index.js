import CampoTexto from '../campo-texto'
import './formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

function Formulario (){

          const setores = [
            'mecanica',
            'lojistica',
            'eletrica',
            'informaçao',
            'alimentos',
            'gestao'
          ]
     
    return(
        <section className='form'>
            <form>
                <h2>Dados cadastro</h2>
            <CampoTexto label="nome" placeholder="digite seu nome" obrigatorio/>
            <CampoTexto label="cargo" placeholder="digite seu cargo"/>
            <CampoTexto label="Imagens" placeholder="insira imagem"/>
             <ListaSuspensa label="area" areas={setores}/>
             <Botao texto="Cadastra"/>
            </form>
        </section>
    )
}

export default Formulario