import React from 'react'
const Listitem = ({listItem, index}) => {
    return (
        <div>
            {index+1}- {listItem.title}
            <hr />
        </div>
    )
}

export default Listitem
