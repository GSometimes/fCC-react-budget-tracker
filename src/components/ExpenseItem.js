import React from 'react'
import {TiDelete} from 'react-icons/ti'

const ExpenseItem = (props) => {
    return (
        <div>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {props.name}
                <div>
                    <span className="badge badge-primary badge-pill mr-3 py-1">
                        ${props.cost}
                    </span>
                        <TiDelete size='1.5em'></TiDelete>
                </div>
            </li>
        </div>
    )
}

export default ExpenseItem
