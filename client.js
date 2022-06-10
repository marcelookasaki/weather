const { default: axios } = require("axios");




async function currentTemperatureOfACity() {

  var query = `{
    currentTemperatureOfACity(name: "São Paulo")
  }`;

  var response = await axios.post('http://localhost:4000/graphql',
    JSON.stringify({
      query
    })
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });


  console.log(response.data);


}

currentTemperatureOfACity();



async function minimumAndMaximumTemperatureOfTodaysDateOfACity() {

  var query = `{
    minimumAndMaximumTemperatureOfTodaysDateOfACity(name: "São Paulo")
  }`;

  var response = await axios.post('http://localhost:4000/graphql',
    JSON.stringify({
      query
    })
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });


  console.log(response.data);


}

minimumAndMaximumTemperatureOfTodaysDateOfACity();


async function minimumAndMaximumTemperatureOfTheNextSevenDaysForACity() {

  var query = `{
    minimumAndMaximumTemperatureOfTheNextSevenDaysForACity(name: "São Paulo")  {
      date
      min
      max
      now
    }
  }`;

  var response = await axios.post('http://localhost:4000/graphql',
    JSON.stringify({
      query
    })
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });


  console.log(response.data.data.minimumAndMaximumTemperatureOfTheNextSevenDaysForACity);


}

minimumAndMaximumTemperatureOfTheNextSevenDaysForACity();



async function minimumCurrentAndMaximumTemperatureForACity() {

  var query = `{
    minimumCurrentAndMaximumTemperatureForACity(name: "São Paulo") {
      date
      min
      max
      now      
    }
  }`;

  var response = await axios.post('http://localhost:4000/graphql',
    JSON.stringify({
      query
    })
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });


  console.log(response.data);


}

minimumCurrentAndMaximumTemperatureForACity();