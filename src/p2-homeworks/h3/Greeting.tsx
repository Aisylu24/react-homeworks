import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
     onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,
         onKeyPressHandler
    } // деструктуризация пропсов
) => {


    const inputClass = (error ? s.error : s.correct)

    return (
        <div className={s.full}>
            <input value={name} onChange={setNameCallback} className={inputClass}
                    onKeyPress={onKeyPressHandler}
            />
            <SuperButton onClick={addUser}
                 // disabled={!name}
            >add</SuperButton>
            <span className={s.users}>{totalUsers}</span>
            <div><span className={s.errorText}>{error}</span></div>

        </div>
    )
}

export default Greeting
