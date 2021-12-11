import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getItems } from '../.././redux/Data/Actions.Data';
import AddItemList from './AddItemList';
import Listitem from './Listitem';

const TodoList = () => {

    const {ListRED:{listItems=[], isLoading, error}} = useSelector(state => state) || {};
    const dispatch= useDispatch();
    useEffect( ()=> {
        dispatch(getItems)
    }, [] )
    return (
        <div>
            <h2>To Do List:</h2>
            <AddItemList />
            <hr />
            { !isLoading 
                ? listItems.map((item, index)=> <Listitem key={item.id} index={index} listItem={item} /> )
                : <h2>Loading...</h2>}
        </div>
    )
}

export default TodoList
