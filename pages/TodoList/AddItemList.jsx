import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addListItem } from '../../redux/Data/Actions.Data';
import {v4 as uuidV4 } from 'uuid';

const AddItemList = () => {

    const [item, setItem]= useState('');
    const dispatch= useDispatch();

    const addItemHandle= ()=> {
        console.log('addItemHandle');
        if(item){
            dispatch(addListItem({
                title: item,
                id: uuidV4()
            }))
            setItem('');
        }
    }
    return (
        <div>
            <input value={item} onChange={(e)=> setItem(e.target.value)} placeholder='enter item' />
            <button onClick={addItemHandle}>add item</button>
        </div>
    )
}

export default AddItemList
