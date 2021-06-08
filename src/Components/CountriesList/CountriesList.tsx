import CountryLine from "../CountryLine/CountryLine"
import {connect} from "react-redux"
import React, {useEffect} from "react";
import {loadMore} from "../../Redux/ActionCreator";
import {getStatisticDataTC} from "../../Thunk/Thunk";
import Loader from "../Loader/Loader";
import {CountriesType, baseContryType, loadMoreType} from '../../Types/Types'
import {stateType} from "../../Redux/Redux";

type StateProps = {
    covidInfo: Array<CountriesType>
    search: string
    isLoaded: boolean
}
type DispatchProps = {
    loadMore: (payload: baseContryType) => loadMoreType
    getStatisticDataTC: () => void
}
type propsType = StateProps & DispatchProps

const CountriesList: React.FC<propsType> = ({covidInfo, isLoaded, search, loadMore, getStatisticDataTC}) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getStatisticDataTC(), [])

    const countryLineGenerator = (lines: Array<CountriesType>) => lines.map((line: any, index: number) => {
        return <CountryLine key={index}
                            index={index}
                            Country={line.Country}
                            NewConfirmed={line.NewConfirmed}
                            TotalConfirmed={line.TotalConfirmed}
                            NewDeaths={line.NewDeaths}
                            TotalDeaths={line.TotalDeaths}
                            NewRecovered={line.NewRecovered}
                            TotalRecovered={line.TotalRecovered}
                            Date={line.Date}
                            loadMore={loadMore}
        />
    })
    const filteredLineGenerator = () => {
        if (search) {
            const searchedTasks = covidInfo.filter((searched, index: number) => {
                return searched.Country.indexOf(search) === 0 || index === 0
            })
            return countryLineGenerator(searchedTasks)
        }
        return countryLineGenerator(covidInfo)
    }

    return (
        <div>
            {isLoaded ? filteredLineGenerator() : <Loader/>}
        </div>
    )
}
const mapStateToProps = (state: stateType) => ({
    covidInfo: state.StatisticReducer.countries,
    search: state.StatisticReducer.search,
    isLoaded: state.StatisticReducer.isLoaded
})
export default connect(mapStateToProps, {loadMore, getStatisticDataTC})(CountriesList)