import classes from './CountryLine.module.scss'
import {baseContryType, loadMoreType} from "../../Types/Types";

type propsType = {
    key: number
    Country: string
    NewConfirmed: number
    TotalConfirmed: number
    NewDeaths: number
    TotalDeaths: number
    NewRecovered: number
    TotalRecovered: number
    Date: string
    index: number
    loadMore: (payload: baseContryType) => loadMoreType
}

const CountryLine:React.FC<propsType> = (props) => {
    const loadMoreHandler = () => {
        const payload = {
            Country: props.Country,
            NewConfirmed: props.NewConfirmed,
            TotalConfirmed: props.TotalConfirmed,
            NewDeaths: props.NewDeaths,
            TotalDeaths: props.TotalDeaths,
            NewRecovered: props.NewRecovered,
            TotalRecovered: props.TotalRecovered,
            Date: props.Date
        }
        props.loadMore(payload)
    }

    return (
        <div onClick={loadMoreHandler} className={`${classes.CountryLine} ${props.index === 0 && classes.active}`}>
            <div className={classes.Country}>
                <div className={classes.num}>{props.index + 1}</div>
                <div className={classes.innerCountry}>{props.Country}</div>
            </div>
            <div className={classes.total}>{props.TotalConfirmed}</div>
        </div>
    )
}
export default CountryLine