import classes from './Info.module.scss'
import scull from '../../img/scull.png'
import heart from '../../img/heart.png'
import recover from '../../img/recover.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {infoPropsType} from "../../Types/Types";
import React from 'react'


const Info:React.FC<infoPropsType> = ({NewConfirmed, TotalConfirmed, NewDeaths,
                  TotalDeaths, NewRecovered, TotalRecovered, Date, Country, closeWindow}) => {
    const onCloseHandler = (e:any) => e.target === e.currentTarget && closeWindow()

    return (
        <div onClick={onCloseHandler} className={classes.Background}>
            <div className={classes.Info}>
                <h2>{Country}</h2>
                <div>
                    <div>
                        <img src={heart} alt="heart"/>
                        <div>Total Confirmed</div>
                        <div>New Confirmed</div>
                    </div>
                    <div className={classes.InfoRight}>
                        <div>{TotalConfirmed}</div>
                        {NewConfirmed ? <div>{NewConfirmed}</div> : <div>no info</div>}
                    </div>
                </div>
                <div>
                    <div>
                        <img src={scull} alt="scull-"/>
                        <div>Total Deaths</div>
                        <div>New Deaths</div>
                    </div>
                    <div className={classes.InfoRight}>
                        <div>{TotalDeaths}</div>
                        {NewDeaths ? <div>{NewDeaths}</div> : <div>no info</div>}
                    </div>
                </div>
                <div>
                    <div>
                        <img className={classes.recover} src={recover} alt="recover"/>
                        <div>Total Recovered</div>
                        <div>New Recovered</div>
                    </div>
                    <div className={classes.InfoRight}>
                        <div>{TotalRecovered}</div>
                        {NewRecovered ? <div>{NewRecovered}</div> : <div>no info</div>}
                    </div>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon className={classes.faIcon} icon={faCalendarAlt}/>
                        <span>Date</span>
                    </div>
                    <span>{Date}</span>
                </div>
                <div className={classes.btn}>
                    <span onClick={() => closeWindow()}>OK</span>
                </div>
            </div>
        </div>
    )
}
export default Info