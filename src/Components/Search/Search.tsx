import loop from '../../img/loop.png'
import classes from './Search.module.scss'
import {connect} from "react-redux"
import {changeValue} from "../../Redux/ActionCreator"
import React, {useState} from "react";
import {changeValueType} from "../../Types/Types";
import {stateType} from "../../Redux/Redux";

type propsType = {
    changeValue: (search:string) => changeValueType
}
const Search:React.FC<propsType> = ({changeValue}) => {
    const [localValue, setLocalValue] = useState('')
    const onChangeHandler = (e: any) => setLocalValue(e.target.value)
    const handleKeyUp = (e: any) => e.key === 'Enter' && changeValue(searchFormation(localValue))
    const searchFormation = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }
    return (
        <div className={classes.Search}>
            <input value={localValue}
                   onChange={onChangeHandler}
                   className={classes.inpt}
                   type="text"
                   placeholder="Search..."
                   onKeyUp={handleKeyUp}
            />
            <img className={classes.loop}
                 onClick={() => changeValue(searchFormation(localValue))}
                 src={loop} alt="loop"
            />
        </div>
    )
}
const mapStateToProps = (state:stateType) => ({
    value: state.StatisticReducer.search
})
export default connect(mapStateToProps, {changeValue})(Search)