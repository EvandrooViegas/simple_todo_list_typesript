import * as Styles from './styles'
import { Item } from '../../types/Item'
import {useState} from 'react'
type Props = {
    item: Item,
}



export function ListItem({item} : Props) {
    const [isChecked, setIsChecked] = useState(item.done)
    const handleClick = () => {
        setIsChecked(!isChecked)
        item.done = !isChecked
    }
    return (
        <Styles.Container done={isChecked}>
            <input 
            type="checkbox" 
            checked={isChecked} 
            onClick={handleClick}
            />
            <label>{item.name}</label>

        </Styles.Container>
    )
}