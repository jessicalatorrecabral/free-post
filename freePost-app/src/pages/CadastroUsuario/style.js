import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 50px 50px;
	background: #fff;
  border-radius: 10px;
  align-items: center;
  font-family: 'Roboto';
  justify-content: center;
    @media(max-width: 767px){
      width: 50%;
      height: 50%;
    }
`
export const BoasVindas = styled.h2`
	color: #000;
	text-align: center;
		@media(max-width: 767px){
			font-size: 1em;
			width: 100%;
    }
`

export const TituloDoForm = styled.h3`
  font-size: 2em;
  border-left: 5px solid dodgerblue;
  padding: 10px;
  color: #000;
  letter-spacing: 5px;
  margin-bottom: 60px;
  font-weight: bold;
  padding-left: 10px;
    @media(max-width: 767px){
      font-size: 1em;
      margin-bottom:10%;
    }
`
export const DadosUsuario = styled.input`
  margin-bottom: 50px;
  width: 100%;
  outline: none;
  background: none;
  padding: 8px;
  border-radius: 10px;
  font-size: 1.2em;
  @media(max-width: 767px){
    margin-bottom: 10%;
    font-size: 1em;
  }
`
export const BotoesGerais = styled.button`
	width: 50%;
  padding: 10px;
  margin-bottom: 12px;
  font-size: 18px;
  border-radius: 6px;
  letter-spacing: 2px;
  font-weight: bold;
  cursor:pointer;
  background: dodgerblue;
  color: #fff;
  border: #fff;
  &:hover{
    background: linear-gradient(45deg, greenyellow, dodgerblue);
  }
  @media(max-width: 767px){
    width: 100%;
  }
`
