import React, {useState} from 'react';
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestApi} from "../api/api";
import s from './Request.module.css'
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";

const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [message, setMessage] = useState('')

    const onClickHandler = ()=> {
        RequestApi.authTest(checked)
            .then(r => setMessage(r.data.errorText))
            .catch (error => {
            console.log({...error});
                console.log(error.response.data.errorText, 'text')
                console.log(error.message, 'mes')
            error.response ? setMessage(error.response.data.errorText) : setMessage(error.message);
        })
    }

    return (
        <div  className={s.container}>
            <div>{message}</div>
            <SuperButton onClick={onClickHandler}>+</SuperButton>
            <SuperCheckbox checked={checked}
                           onChangeChecked={setChecked}/>
        </div>
    );
};

export default Request;