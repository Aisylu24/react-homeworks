import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const priorityClass = classes.item + ' ' + classes[props.affair.priority]
    
    return (
        <div className={classes.affair}>
          <div className={classes.item}>{props.affair.name}</div>
            <div className={priorityClass}>[{props.affair.priority}]</div>

            <button className={`${classes.button} ${classes.item}`}
                    onClick={deleteCallback}>x</button>
        </div>
    )
}

export default Affair
