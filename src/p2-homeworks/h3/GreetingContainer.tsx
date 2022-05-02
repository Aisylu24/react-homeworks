import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";



type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string)=> void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    // const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
    //     console.log('name', e)
    //     setName(e.currentTarget.value) } // need to fix
    //
    // const addUser = () => {
    //     if(name) {
    //     addUserCallback(name.trim())
    //     alert(`Hello ${name.trim()}!`)
    //     setName('')}
    //     else {
    //         setError('name is required')}
    //
    // }


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        //console.log('name', e)
        const value = e.currentTarget.value
        //'        123123       '
        //'123123'

        //'         '
        //''
        if (value.trim() !== '') {
            setError('')
            //setName(value)
        } else {
           // setName('')
            setError('name is required')
        }
        setName(value)
        //setName(e.currentTarget.value)
        // if (e.currentTarget.value)
        //     setError('')
        // else {
        //     setName('')
        //     setError('name is required')
        // }
    }


    const addUser = () => {
        if (name.trim() === '') {
            setError('name is required')
            return
        }
        addUserCallback(name.trim())
        alert(`Hello ${name.trim()}!`)
        setName('')
    }


    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        console.log('key', e)
        if (e.key === 'Enter') {
            addUser()
        }
    }



    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
        />
    )
}

export default GreetingContainer
