import * as Styles from './App.styles'
import { useState } from 'react';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/addArea'
export default function App() {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: "Comprar o pão na padaria", done: false},
    {id: 1, name: "Comrpar um bolo na padaria", done: false},
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1, 
      name: taskName,
      done: false 
    })

    setList(newList)
  }
  return (
    <Styles.Container>
      <Styles.Area>
        <Styles.Header>
          Lista de Tarefas
        </Styles.Header>

        <AddArea handleAddTask={handleAddTask} />

        {list.map((item, index) => (
          <ListItem item={item} key={index} />
        ))}

      </Styles.Area>
    </Styles.Container>
  );
}

