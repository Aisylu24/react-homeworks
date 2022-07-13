import React from 'react'
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRangeMin: (value1: number) => void
    onChangeRangeMax: (value2: number) => void
    value?: [number, number]
    // min: number
    // max:number
    // step:number
    // disable: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRangeMin,onChangeRangeMax, value,
        ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки
     let finalRangeClassName = `${s.range} `
    return (
        <div className={s.container} >
            <input
                type={'range'}
                onChange={(e) =>{ onChangeRangeMin(+e.currentTarget.value)}}
               className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <input
                type={'range'}
                onChange={(e)=>onChangeRangeMax(+e.currentTarget.value)}
               className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </div>
    )
}

export default SuperDoubleRange
