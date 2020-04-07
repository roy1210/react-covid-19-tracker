import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
  let changeableUrl = url
  if (country) {
    changeableUrl = `${url}/countries/${country} `
  }
  try {
    // Memo: Destructuring and destructuring again
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl)

    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error) {
    console.error(error)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)

    // Memo: returning object
    // Type: modifiedData -> Array
    // Memo: returning each custom object by map. imaging like `filter`
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))
    console.log('data', data);
    console.log('modifiedData', modifiedData);

    return modifiedData
  } catch (error) {
    console.error(error)
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`)

    // Memo: push to all mapping element to an array
    const countriesArray = countries.map((country) => country.name)

    return countriesArray
  } catch (error) {
    console.error(error)
  }
}