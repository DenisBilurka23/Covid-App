import {connect} from "react-redux"
import Info from "./Info";
import React, {useEffect, useState} from "react";
import {closeWindow} from "../../Redux/ActionCreator";
import {infoPropsType} from "../../Types/Types";
import {stateType} from "../../Redux/Redux";

type filterDateType = (date: string ) => string

const InfoContainer:React.FC<infoPropsType>= ({isShown, NewConfirmed,
                           TotalConfirmed, NewDeaths,
                           TotalDeaths, NewRecovered,
                           TotalRecovered, Date, Country, closeWindow
                       }) => {
    const [fiteredDate, setFiteredDate] = useState(Date)
    useEffect(() => {
        const prevent = (ev: any) => ev.preventDefault()
        if (isShown) {
            document.addEventListener('wheel', prevent, {passive: false})
            const filterDate: filterDateType = (date) => {
                const filtered = date.split('-').splice(0, 3).reverse()
                filtered[0] = filtered[0].slice(0, 2)
                return filtered.join('.')
            }
            setFiteredDate(filterDate(Date))
        }
        return () => document.removeEventListener('wheel', prevent)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isShown])

    return (
        <div>
            {isShown &&
            <Info NewConfirmed={NewConfirmed}
                  TotalConfirmed={TotalConfirmed}
                  NewDeaths={NewDeaths}
                  TotalDeaths={TotalDeaths}
                  NewRecovered={NewRecovered}
                  TotalRecovered={TotalRecovered}
                  Date={fiteredDate}
                  Country={Country}
                  closeWindow={closeWindow}
            />}
        </div>
    )
}
const mapStateToProps = (state: stateType) => ({
    isShown: state.ShowMoreReducer.isShown,
    Country: state.ShowMoreReducer.CountryInfo.Country,
    NewConfirmed: state.ShowMoreReducer.CountryInfo.NewConfirmed,
    TotalConfirmed: state.ShowMoreReducer.CountryInfo.TotalConfirmed,
    NewDeaths: state.ShowMoreReducer.CountryInfo.NewDeaths,
    TotalDeaths: state.ShowMoreReducer.CountryInfo.TotalDeaths,
    NewRecovered: state.ShowMoreReducer.CountryInfo.NewRecovered,
    TotalRecovered: state.ShowMoreReducer.CountryInfo.TotalRecovered,
    Date: state.ShowMoreReducer.CountryInfo.Date
})
export default connect(mapStateToProps, {closeWindow})(InfoContainer)