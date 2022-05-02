import React from 'react'
import classes from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessagePropsType) {
    return (
        <div className={classes.main}>

            <img alt={'avatar'} src={props.avatar} className={classes.img}/>

            <div className={classes.corner}></div>
            <div className={classes.content}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.message}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
