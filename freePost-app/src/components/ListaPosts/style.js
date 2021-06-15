import styled from 'styled-components'

export const ContainerPost = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 8px;
	width: 80%;
	height: 60%;
`
export const TelaDePosts = styled.div`
	display: flex ;
	width: 50vw;
	height: 100%;
	margin-bottom: 20px ;
	overflow-y: scroll;
	&::-webkit-scrollbar{
    background: transparent;
    width: 6px;
}
	@media(max-width: 767px){
		width:100%;
	}
`
export const Post = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	padding: 10px;
	width: 80%;
	margin: 20px;
	border-radius: 10px;
	background: #fff;
	height: 100px;
	&::-webkit-scrollbar{
    height: 12px;
    width: 6px;
		background-color: #F5F5F5;
	}
	&::-webkit-scrollbar-track{
		box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		background-color: #F5F5F5;
	}
	&::-webkit-scrollbar-thumb{
    background-color: yellowgreen;
	}
`
export const AutorPost = styled.p`
	font-weight: bold;
	color: dodgerblue;
	margin-bottom: 5px;
	margin-top: 5px;
	width: 30%;
	text-transform: capitalize;
	@media(max-width: 767px){
		width: 80%;
	}
`
export const BotaoLike = styled.button`
	border: dodgerblue solid 3px;
	border-radius:10px;
	background-color: #fff;
	color: yellowgreen;
	font-weight: bold;
	margin-top: 10px;
	margin-right: 8px;
	&:hover{
		cursor: pointer;
		background-color: #fff;
		border: yellowgreen solid 3px;
		color: dodgerblue
	}
`
export const LikeContainer = styled.div`
	width: 20%;
`