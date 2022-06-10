var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`

  type Temperature {
    date: String
    min: Int
    max: Int
    now: Int
  }


  type Query {
    currentTemperatureOfACity(name: String!): String
    minimumAndMaximumTemperatureOfTodaysDateOfACity(name: String!): String
    minimumAndMaximumTemperatureOfTheNextSevenDaysForACity(name: String!): [Temperature]
    minimumCurrentAndMaximumTemperatureForACity(name: String!): Temperature
  }

`);



var data = require('./data');
var options = { year: 'numeric', month: 'numeric', day: 'numeric' };

var root = {
  currentTemperatureOfACity: ({ name }) => {

    city = data.find((city) => city.name.toUpperCase
      ().includes(name.toUpperCase()))
    if (city) {
      dateNow = new Date().toLocaleDateString('pt-BR', options);
      currentTemperature = city.temperatures.find((temperature) => temperature.date == dateNow);
      if (!currentTemperature) {
        return `Não encontrado registro para está data  ${dateNow}`;
      }
      return ` A temperatura atual é ${currentTemperature.now}`;
    }
    else {
      return `Não encontrado cidade com o nome [${name}]!`;
    }

  },
  minimumAndMaximumTemperatureOfTodaysDateOfACity: ({ name }) => {

    city = data.find((city) => city.name.toUpperCase
      ().includes(name.toUpperCase()))
    if (city) {
      dateNow = new Date().toLocaleDateString('pt-BR', options);
      currentTemperature = city.temperatures.find((temperature) => temperature.date == dateNow);
      if (!currentTemperature) {
        return `Não encontrado registro para está data  ${dateNow}`;

      }
      return ` A temperatura minima é ${currentTemperature.min} e a maxima é ${currentTemperature.max}`;
    }
    else {
      return `Não encontrado cidade com o nome [${name}]!`;
    }
  },
  minimumAndMaximumTemperatureOfTheNextSevenDaysForACity: ({ name }) => {


    city = data.find((city) => city.name.toUpperCase
      ().includes(name.toUpperCase()))

    if (city) {
      return city.temperatures;
    }
    else {
      return [];
    }
  },
  minimumCurrentAndMaximumTemperatureForACity: ({ name }) => {

    city = data.find((city) => city.name.toUpperCase
      ().includes(name.toUpperCase()))
    if (city) {
      dateNow = new Date().toLocaleDateString('pt-BR', options);
      currentTemperature = city.temperatures.find((temperature) => temperature.date == dateNow);
      if (!currentTemperature) {
        return `Não encontrado registro para está data  ${dateNow}`;

      }
      return currentTemperature;
    }
    else {
      return `Não encontrado cidade com o nome [${name}]!`;
    }
  },
};



var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});