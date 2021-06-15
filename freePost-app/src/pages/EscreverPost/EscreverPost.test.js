import userEvent from '@testing-library/user-event'
import axios from 'axios'
import {render, screen} from '@testing-library/react'
import EscreverPost from './EscreverPost'
import ListaPosts from '../../components/ListaPosts/ListaPosts'
import cookies from '../../services/auth'




jest.mock('axios')

test('o usuario deve ser capaz de enviar um post', async()=>{
    axios.post.mockResolvedValue()

    render(<EscreverPost/>)

    const areaMensagem = screen.getByDisplayValue('areaDeMensagem')
    userEvent.type(areaMensagem, 'post de teste')

    const botaoAddPost = screen.getByText('Adicionar post')
    userEvent.click(botaoAddPost)

    expect(axios.post).toHaveBeenCalledWith('https://segware-book-api.segware.io/api/feed', {
        content: 'post de teste'
    
    }, {
        header: {
            Authorization: `Bearer ${cookies.get('token')}`
        }
    })

})

test('chamada para pegar todos os posts', async ()=>{
    axios.get.mockResolvedValue({
        data:[{authorId: 2, content: "post de teste"}]
    })
    render(<ListaPosts/>)

    expect(screen.getByTestId('container')).toBeInTheDocument()

    const post =  screen.getByText(/post de teste/)

    expect(post).toBeInTheDocument()
    
    expect(axios.get).toHaveBeenCalled('https://segware-book-api.segware.io/api/feeds')
})

test('curtir posts', async ()=>{
    axios.post.mockResolvedValue()
    render(<ListaPosts/>)

    const botaoCurtir = screen.getByText('curtir')
    userEvent.click(botaoCurtir)

    expect(axios.post).toHaveBeenCalledWith('https://segware-book-api.segware.io/api/reaction', {
        feedId: 1,
        like:true,
        love:true
        }, {headers: {Authorization: `Bearer ${cookies.get('token')}`}}
    )

})