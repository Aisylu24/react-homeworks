import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id:number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')}
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    // const set =(e: React.MouseEvent<HTMLInputElement,MouseEvent>) => {
    //     props.setFilter(e.currentTarget.value as FilterType)
    // }

    // const onAll = classes.button + ' ' + (props.filter === 'all' ? classes.active : '')
    // const onHigh = classes.button + ' ' + (props.filter === 'high' ? classes.active : '')
    // const onMiddle = classes.button + ' ' + (props.filter === 'middle' ? classes.active : '')
    // const onLow = classes.button + ' ' + (props.filter === 'low' ? classes.active : '')


    const setClass = (filter: FilterType) => {
       return classes.button + ' ' + (props.filter === filter ? classes.active : '')
    }


    return (
        <div>

            {mappedAffairs}

            {/*<button onClick={setAll} className={onAll}>All</button>*/}
            {/*<button onClick={setHigh} className={onHigh}>High</button>*/}
            {/*<button onClick={setMiddle} className={onMiddle}>Middle</button>*/}
            {/*<button onClick={setLow} className={onLow}>Low</button>*/}

            <button onClick={setAll} className={setClass('all')} value={'all'}>All</button>
            <button onClick={setHigh} className={setClass('high')} value={'high'}>High</button>
            <button onClick={setMiddle} className={setClass('middle')} value={'middle'}>Middle</button>
            <button onClick={setLow} className={setClass('low')} value={'low'}>Low</button>



        </div>
    )
}

export default Affairs
