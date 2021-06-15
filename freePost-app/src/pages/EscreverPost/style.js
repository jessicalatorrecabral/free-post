import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
	flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
    @media(max-width: 767px){
      flex-direction: column;
    }
`
export const AreaPostagem = styled.div`
	display:flex;
	flex-direction: column;
	margin-left: 40px;
	align-items: center;
	justify-content: center;
	height: 60%;
	width: 60%;
`
export const AreaTexto = styled.textarea`
	border-radius: 10px;
	padding: 8px;
	margin-top:10px;
	margin-bottom: 40px;
	&::placeholder{
		font-family: 'Roboto';
	}
	@media(max-width: 767px){
		width: 80%;
	}
`
export const BotoesGerais = styled.button`
	width: 40%;
	padding: 10px;
	margin: 12px;
	font-size: 18px;
	border-radius: 6px;
	letter-spacing: 2px;
	font-weight: bold;
	cursor:pointer;
	background: dodgerblue;
	color: #fff;
	border: #fff;
	&:hover{
		background: lightblue;
	}
	@media(max-width:767px){
		width: 80%;
	}
`
