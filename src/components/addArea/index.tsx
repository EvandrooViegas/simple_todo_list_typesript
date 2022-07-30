import { useState } from 'react'
import * as Styles from './styles'
type Props = {
    handleAddTask: (taskName: string) => void
}
export const AddArea = ({handleAddTask} : Props) => {
 
    const [inputText, setInputText] = useState("")
    const handleSubmit = (event:any) => {
      
        if(inputText) {
            event.preventDefault();
            handleAddTask(inputText)
        }
        setInputText("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <Styles.Container>
                <input 
                
                type="text"
                placeholder='Adicione uma tarefa'
                className='input'
                onChange={e => setInputText(e.target.value)}
                />
                <div className='image'>
                    +
                </div>                
            </Styles.Container>
        </form>
    )
}