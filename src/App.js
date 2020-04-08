import React, { Component } from 'react'
import { Cards, Chart, CountryPicker, Title, Footer, FooterPush } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import { GlobalStyle } from "./styles/GlobalStyle"

class App extends Component {
  state = {
    data: {},
    country: '',
  }


  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({
      data: fetchedData,
    })
  }


  handleCountryChange = async (country) => {
    if (country !== "global") {
      const fetchedData = await fetchData(country)
      this.setState({ data: fetchedData, country: country })
    } else {
      const fetchedData = await fetchData()
      this.setState({ data: fetchedData, country: "" })
    }
  }


  render() {
    const { data, country } = this.state
    return (
      <>
        <div className={styles.container}>
          <Title />
          {/* <Cards data={data} /> */}
          {/* <CountryPicker handleCountryChange={this.handleCountryChange} /> */}
          {/* <Chart data={data} country={country} /> */}

        </div>
        <FooterPush />
        <Footer />
        <GlobalStyle />
      </>
    )
  }
}

export default App;