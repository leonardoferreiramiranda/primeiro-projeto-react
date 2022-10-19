import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem, Trash, Check, CaixaTitle, CaixaLista} from "./styles.js"


function App() {

  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState("");

  function mudancaNoInput(event) {
    setInputTask(event.target.value);
  }
  
  function cliqueiNoBotao() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false}])
    }
    setInputTask("");
  }

  function finarlizarTarefa(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deleterTarefa(id) {
    const newList = list.filter((item) => item.id !== id)

    setList(newList)
  }

  return (
    
    <Container>
      <CaixaTitle>
        <h1>Lista De Tarefas</h1>
      </CaixaTitle>
      <ToDoList>
        <Input onChange={mudancaNoInput} placeholder="O que tenho pra fazer..." value={inputTask}></Input>
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>
      </ToDoList>
        <CaixaLista>
        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finarlizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deleterTarefa(item.id)} />
                </ListItem>
              ))
            ) : (
              <h2>Não há itens na lista </h2>
            )}
        </ul>
        </CaixaLista>
    </Container>
   
  )
}

export default App
