import React from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import {Container, DadosUsuario, TituloDoForm, BotoesGerais, BoasVindas} from './style'
import { BASE_URL } from '../../constants/urls'

const cookies = new Cookies()

export default class CadastroUsuario extends React.Component {
  state = {
		username:"",
    password: "",
  }

  handleName = (event) =>{
		this.setState({username: event.target.value})
  }

  handlePass =(event)=>{
    this.setState({password: event.target.value})
  }

	cadastrarUser = () =>{
    const body ={
      username:this.state.username,
      password:this.state.password
    }
    axios.post(`${BASE_URL}/sign-up`,body)
      .then((response) => {
				alert('user cadastrado com sucesso')
        }
      )
			.catch((err)=>{
				alert('algo deu errado, verifique os campos de password e username')
        }
      )
	}

  loginUser = () => {
		const body = {
      username:this.state.username,
      password:this.state.password
    }
    axios.post(`${BASE_URL}/sign-in`,body)
      .then((response)=>{
        cookies.set('token', response.data)
        alert('login realizado com sucesso')
        }
			)
      .catch((err)=>{
        alert('login incorreto, verifique seu username e password')
        }
			)
  }

	render() {
		return(
			<Container>
        <BoasVindas>Bem-vind@ ao Free Post</BoasVindas>
				<TituloDoForm>Cadastre-se e escreva!</TituloDoForm>
        <DadosUsuario onChange={this.handleName} placeholder={"username"} value={this.state.username}></DadosUsuario>
        <DadosUsuario onChange={this.handlePass} placeholder={"password"} value={this.state.password}></DadosUsuario>
        <BotoesGerais onClick={this.cadastrarUser}>Criar cadastro</BotoesGerais>
        <BotoesGerais onClick={this.loginUser}>login</BotoesGerais>
        <BotoesGerais onClick={this.props.escreverPost}>Escrever Post</BotoesGerais>
      </Container>
    )
  }
}