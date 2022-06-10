const crypto = require('crypto');

var options = { year: 'numeric', month: 'numeric', day: 'numeric' };

module.exports = cities = [
  {
    id: crypto.randomBytes(10).toString('hex'),
    name: 'São Paulo',
    temperatures: [
      {
        date: new Date(2022, 06, 10).toLocaleDateString('pt-BR', options),
        min: 15,
        max: 28,
        now: 22
      },
      {
        date: new Date(2022, 06, 11).toLocaleDateString('pt-BR', options),
        min: 20,
        max: 30,
        now: 25
      },
      {
        date: new Date(2022, 06, 12).toLocaleDateString('pt-BR', options),
        min: 21,
        max: 31,
        now: 27
      },
      {
        date: new Date(2022, 06, 13).toLocaleDateString('pt-BR', options),
        min: 20,
        max: 25,
        now: 23
      },
      {
        date: new Date(2022, 06, 14).toLocaleDateString('pt-BR', options),
        min: 15,
        max: 25,
        now: 16
      },
      {
        date: new Date(2022, 06, 15).toLocaleDateString('pt-BR', options),
        min: 10,
        max: 15,
        now: 13
      },
      {
        date: new Date(2022, 06, 16).toLocaleDateString('pt-BR', options),
        min: 13,
        max: 15,
        now: 13
      },
    ]
  },
  {
    id: crypto.randomBytes(10).toString('hex'),
    name: 'Dracena',
    temperatures: [
      {
        date: new Date(2022, 06, 10).toLocaleDateString('pt-BR', options),
        min: 15,
        max: 28,
        now: 22
      },
      {
        date: new Date(2022, 06, 11).toLocaleDateString('pt-BR', options),
        min: 20,
        max: 30,
        now: 25
      },
      {
        date: new Date(2022, 06, 12).toLocaleDateString('pt-BR', options),
        min: 21,
        max: 31,
        now: 27
      },
      {
        date: new Date(2022, 06, 13).toLocaleDateString('pt-BR', options),
        min: 20,
        max: 25,
        now: 23
      },
      {
        date: new Date(2022, 06, 14).toLocaleDateString('pt-BR', options),
        min: 15,
        max: 25,
        now: 16
      },
      {
        date: new Date(2022, 06, 15).toLocaleDateString('pt-BR', options),
        min: 10,
        max: 15,
        now: 13
      },
      {
        date: new Date(2022, 06, 16).toLocaleDateString('pt-BR', options),
        min: 13,
        max: 15,
        now: 13
      },
    ]
  },
  {
    id: crypto.randomBytes(10).toString('hex'),
    name: 'Adamantina',
    temperatures: [
      {
        date: new Date(2022, 06, 10).toLocaleDateString('pt-BR', options),
        min: 15,
        max: 28,
        now: 22
      },
      {
        date: new Date(2022, 06, 11).toLocaleDateString('pt-BR', options),
        min: 20,
        max: 30,
        now: 25
      },
      {
        date: new Date(2022, 06, 12).toLocaleDateString('pt-BR', options),
        min: 21,
        max: 31,
        now: 27
      },
      {
        date: new Date(2022, 06, 13).toLocaleDateString('pt-BR', options),
        min: 20,
        max: 25,
        now: 23
      },
      {
        date: new Date(2022, 06, 14).toLocaleDateString('pt-BR', options),
        min: 15,
        max: 25,
        now: 16
      },
      {
        date: new Date(2022, 06, 15).toLocaleDateString('pt-BR', options),
        min: 10,
        max: 15,
        now: 13
      },
      {
        date: new Date(2022, 06, 16).toLocaleDateString('pt-BR', options),
        min: 13,
        max: 15,
        now: 13
      },
    ]
  }
];



