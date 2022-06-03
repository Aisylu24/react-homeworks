import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1362253/pub_5cf4d0bf6ba33d00afc8cc0b_5cf4d8eb9a90a100ae0543f2/scale_1200',
    name: 'Aisylu',
    message: "Hello! I'm glad to see you!",
    time: '20:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
