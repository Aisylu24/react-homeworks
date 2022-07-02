import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {loadingAC, StateType} from "./bll/loadingReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import s from './HW10.module.css'


function HW10() {
   let loading = useSelector<AppStoreType,StateType>(state => state.loading)
    let dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
            setTimeout(()=> {
                dispatch(loadingAC(false))
            }, 3000)
        console.log('loading...')
    };

    return (
        <div className={loading? s.loading : ""}>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
