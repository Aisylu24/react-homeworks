import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state=> state.themes.theme)
    let dispatch = useDispatch()

    const onChangeCallback = (themeValue:string)=> {
        dispatch(changeThemeC(themeValue))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect options={themes} value={theme} onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
