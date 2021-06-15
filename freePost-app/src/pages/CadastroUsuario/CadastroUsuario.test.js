import axios from 'axios'
import CadastroUsuario from './CadastroUsuario'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'



jest.mock('axios')

test('criação de cadastro', ()=>{
    axios.post.mockResolvedValue()
    render (<CadastroUsuario/>)

    const input1 = screen.getByPlaceholderText('username')
    userEvent.type(input1, 'Fred')

    const input2 = screen.getByPlaceholderText('password')
    userEvent.type(input2, '12345')

    const botaoCriarCadastro = screen.getByText('Criar cadastro')
    userEvent.click(botaoCriarCadastro)

    expect(axios.post).toHaveBeenCalledWith('https://segware-book-api.segware.io/api/sign-up',{
        username: 'Fred',
        password: '12345'
    }
    )
})
test('login do usuario ja cadastrado', ()=>{
    axios.post.mockResolvedValue()
    render(<CadastroUsuario/>)

    const input1 = screen.getByPlaceholderText('username')
    userEvent.type(input1, 'Fred')

    const input2 = screen.getByPlaceholderText('password')
    userEvent.type(input2, '12345')

    const botaoLogin = screen.getByText('login')
    userEvent.click(botaoLogin)

    expect(axios.post).toHaveBeenCalledWith('https://segware-book-api.segware.io/api/sign-in',{
        username: 'Fred',
        password: '12345'
    }
    )

})


