import styled from 'styled-components'
import { FaRegTrashAlt, FaRegCheckCircle } from "react-icons/fa";

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const CaixaTitle = styled.header`
    height: 30%;

    h1 {
        font-size: 50px;
        text-align: center;
        color: white;
    }
`

export const ToDoList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
`
export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 40px;
    width: 450px;
`
export const Button = styled.button`
    background: gray;
    border-radius: 5px;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    height: 40px;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
    width: 130px;

   &:hover {
    opacity: 0.8;
   }

   &:active {
    opacity: 0.6;
   }
`
export const CaixaLista = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

`

export const ListItem = styled.div`
    background: ${props => props.isFinished ? '#007FFF' : '#696969'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 10px;
    width: 500px;
   

    li {
        list-style: none;
    }
`

export const Trash = styled(FaRegTrashAlt)`
    cursor: pointer;
`

export const Check = styled(FaRegCheckCircle)`
    cursor: pointer;
`