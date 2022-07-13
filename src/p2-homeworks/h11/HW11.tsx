import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import s from './HW11.module.css'
import ReactSlider from 'react-slider'
import StyleSliderComponent from "./common/StyleSliderComponent/StyleSliderComponent";


function HW11() {
    const [value1, setValue1] = useState(0)
  //  const [value2, setValue2] = useState(100)

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(500)


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.superRange}>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                />
            </div>

            <div className={s.doubleRange}>
                {/*<span>{value1}</span>*/}
                {/*<SuperDoubleRange*/}
                {/*    value={[value1, value2]}*/}
                {/*    onChangeRangeMin={setValue1}*/}
                {/*onChangeRangeMax={setValue2}*/}

                {/*/>*/}
                {/*<span>{value2}</span>*/}
                <div/>
                <div className={s.container}>

                <ReactSlider defaultValue={[min, max]}
                                 className={s.slider}
                                 trackClassName={s.tracker}
                                 min={0}
                                 max={500}
                                 minDistance={50}
                                 step={50}
                                 withTracks={true}
                                 pearling={true}
                                 renderThumb={(props) => {
                                     return <div {...props} className={s.thumb}></div>
                                 }}
                                 onChange={([min, max]) => {
                                     setMin(min)
                                     setMax(max)
                                 }}
                    />

                    <div className={s.valuesWrapper}>
                        <p>
                            Min Value:
                            <span>{min}</span>
                        </p>
                        <p>
                            Max Value:
                            <span>{max}</span>
                        </p>
                    </div>
                </div>
                <StyleSliderComponent/>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
