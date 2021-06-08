import './App.scss'
import Nav from "./Components/Nav/Nav"
import CountriesList from "./Components/CountriesList/CountriesList"
import InfoContainer from "./Components/Info/InfoContainer";

const App = () => {
    return (
        <div className="App">
            <Nav/>
            <CountriesList/>
            <InfoContainer/>
        </div>
    )
}

export default App

