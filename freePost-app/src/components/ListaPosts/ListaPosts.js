import React from 'react'
import axios from 'axios'
import {cookies} from '../../services/auth'
import {TelaDePosts, ContainerPost, Post, AutorPost, BotaoLike, LikeContainer} from './style'
import { BASE_URL } from '../../constants/urls'


export default class ListaPosts extends React.Component {
  state = {
    contentPost: [],
    
  }
  
  componentDidMount(){
    this.mostrarPosts()
  }

  mostrarPosts = () => {
    axios.get(`${BASE_URL}/feeds`, {
      headers: {
        Authorization: `Bearer ${cookies.get('token')}`
        }
    })
    .then((response)=>{
      this.setState({contentPost: response.data})
      }
    )
    .catch((err)=>{
      console.log(err)
      }
    )
  }

  curtirPost = (feedId) => {
    
    const body = {
      feedId: feedId,
      like: true,
      love: true
    }

    axios.post(`${BASE_URL}/reaction`, body, {
      headers: {
        Authorization: `Bearer ${cookies.get('token')}`}
    })
    .then((response) => {
      console.log(response)
      alert('você curtiu esse post! :)')
      
      this.mostrarPosts()
    })
    .catch((err)=>{
      alert('Algo deu errado...')
      console.log(err)
    })
    
  }

  render() {
    const listaPosts = this.state.contentPost.map((post) => {
      return  <Post key={post.id}><AutorPost>{post.author.username}</AutorPost> {post.content}
        <LikeContainer>
          <BotaoLike  onClick={()=>this.curtirPost(post.id)} >curtir</BotaoLike>
          {post.likes}
        </LikeContainer>
        </Post>
      }
    )
    return (
      <ContainerPost data-testid={'container'}>
        <h2>Últimos posts adicionados</h2>
        <TelaDePosts>
          <div>
            {listaPosts} 
          </div>
        </TelaDePosts>
      </ContainerPost>
    )
  }
}
  
  