import React from 'react'
import EscreverPost from './pages/EscreverPost/EscreverPost'
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: linear-gradient(45deg, greenyellow, dodgerblue);
`

class App extends React.Component {
  state={
    telaAtual: "cadastro"
  }
  mudaTela = () => {
    switch(this.state.telaAtual){
      case "cadastro":
        return <CadastroUsuario escreverPost={this.escreverPost}/>
      case "posts":
        return <EscreverPost cadastro={this.cadastro}/>
      default:
        return <CadastroUsuario/>
    }
  }

  cadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }
  escreverPost = () => {
    this.setState({telaAtual:"posts"})
  }
  
  render () {
    return (
      <Container>
        {this.mudaTela()}
      </Container>
    )
  }
}
export default App;
