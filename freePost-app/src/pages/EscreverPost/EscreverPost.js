import React from 'react'
import axios from 'axios'
import {cookies} from '../../services/auth'
import ListaPosts from '../../components/ListaPosts/ListaPosts'
import {Container, AreaPostagem, AreaTexto, BotoesGerais} from './style'
import { BASE_URL } from '../../constants/urls'


class EscreverPost extends React.Component {
	state={
		post:""
  }

  handlePost = (e) =>{
		this.setState({post: e.target.value})
  }
    
  criarPost = () => {

		const body = {
			content: this.state.post
    }
		axios.post(`${BASE_URL}/feed`, body, {
			headers: {
        Authorization: `Bearer ${cookies.get('token')}`
      }
    })
		.then((response)=>{
			this.setState({post: ""})
			alert('postado!')
      }
		)
    .catch((err)=>{
      alert('Algo deu errado, faça login ou cadastre-se')
      }
		)
  }
        
	render () {
		return (
			<Container>
				<AreaPostagem>
          <AreaTexto id={'areaDeMensagem'} rows="5" cols="70" placeholder= {"o que você está pensando?"} value={this.state.post} onChange={this.handlePost} ></AreaTexto>
          <BotoesGerais onClick={this.criarPost}>Adicionar post</BotoesGerais>
          <BotoesGerais onClick={this.props.cadastro}>Voltar para tela de login</BotoesGerais>
        </AreaPostagem>
        <ListaPosts/>
      </Container>
		)
	}
}
export default EscreverPost;
