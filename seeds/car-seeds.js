const { Car } = require("../models");

const carData = [
    {
      "ID": "Ag863w45e4",
      "MAKE": "Aston Martin",
      "YEAR": 2018,
      "MODEL": "DB11",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "ly3deBH9dp",
      "MAKE": "Aston Martin",
      "YEAR": 2018,
      "MODEL": "Vanquish S",
      "TYPE": "Convertible, Coupe",
      "PRICE": 200
    },
    {
      "ID": "Rt4fZCStn0",
      "MAKE": "Aston Martin",
      "YEAR": 2017,
      "MODEL": "Vanquish",
      "TYPE": "Coupe, Convertible",
      "PRICE": 200
    },
    {
      "ID": "eQfct9NU2e",
      "MAKE": "Aston Martin",
      "YEAR": 2017,
      "MODEL": "Vantage",
      "TYPE": "Convertible, Coupe",
      "PRICE": 200
    },
    {
      "ID": "ac6SvvBlhb",
      "MAKE": "BMW",
      "YEAR": 2020,
      "MODEL": "3 Series",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "CazUpTttvZ",
      "MAKE": "BMW",
      "YEAR": 2020,
      "MODEL": "7 Series",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "4I76Z6jO2y",
      "MAKE": "BMW",
      "YEAR": 2020,
      "MODEL": "X7",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "6AeQbfjIla",
      "MAKE": "BMW",
      "YEAR": 2019,
      "MODEL": "M4",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "freZeixZ7m",
      "MAKE": "BMW",
      "YEAR": 2021,
      "MODEL": "X3",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "1IUIgIa5Mw",
      "MAKE": "BMW",
      "YEAR": 2021,
      "MODEL": "X5",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "jVDE5tnJ3W",
      "MAKE": "BMW",
      "YEAR": 2021,
      "MODEL": "X7",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "DEUhkh0p7D",
      "MAKE": "Ferrari",
      "YEAR": 2018,
      "MODEL": "Portofino",
      "TYPE": "Convertible",
      "PRICE": 200
    },
    {
      "ID": "7f6NuNcz5Q",
      "MAKE": "Ferrari",
      "YEAR": 2017,
      "MODEL": "F12berlinetta",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "nTSt68sCf3",
      "MAKE": "Ferrari",
      "YEAR": 2017,
      "MODEL": "California",
      "TYPE": "Convertible",
      "PRICE": 200
    },
    {
      "ID": "bIBwtlieZU",
      "MAKE": "Ferrari",
      "YEAR": 2018,
      "MODEL": "488 GTB",
      "TYPE": "Coupe",
      "PRICE": 300
    },
    {
      "ID": "7bFb3FFwsW",
      "MAKE": "Ferrari",
      "YEAR": 2018,
      "MODEL": "812 Superfast",
      "TYPE": "Coupe",
      "PRICE": 300
    },
    {
      "ID": "3jCTkADJgf",
      "MAKE": "Ferrari",
      "YEAR": 2018,
      "MODEL": "488 Spider",
      "TYPE": "Convertible",
      "PRICE": 300
    },
    {
      "ID": "N7vduS162x",
      "MAKE": "Mercedes-Benz",
      "YEAR": 2021,
      "MODEL": "AMG GT",
      "TYPE": "Coupe",
      "PRICE": 150
    },
    {
      "ID": "ETWwc6EAl8",
      "MAKE": "Mercedes-Benz",
      "YEAR": 2021,
      "MODEL": "SLR",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "6VfLtAfcP2",
      "MAKE": "Mercedes-Benz",
      "YEAR": 2021,
      "MODEL": "SLK",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "TPKjQCPefR",
      "MAKE": "Mercedes-Benz",
      "YEAR": 2021,
      "MODEL": "C-Class",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "NHsqC6sKLE",
      "MAKE": "Mercedes-Benz",
      "YEAR": 2021,
      "MODEL": "G-Class",
      "TYPE": "SUV",
      "PRICE": 350
    },
    {
      "ID": "qcwTvAzvPk",
      "MAKE": "Audi",
      "YEAR": 2020,
      "MODEL": "R8",
      "TYPE": "Coupe, Convertible",
      "PRICE": 200
    },
    {
      "ID": "gQLt1rB4b8",
      "MAKE": "Audi",
      "YEAR": 2020,
      "MODEL": "SQ5",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "2CUcwBko2t",
      "MAKE": "Audi",
      "YEAR": 2021,
      "MODEL": "Q8",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "iSyJDLyhUC",
      "MAKE": "Audi",
      "YEAR": 2021,
      "MODEL": "S5",
      "TYPE": "Convertible,Sedan,Coupe",
      "PRICE": 200
    },
    {
      "ID": "6I3A3rIyyD",
      "MAKE": "Audi",
      "YEAR": 2021,
      "MODEL": "A7",
      "TYPE": "Sedan",
      "PRICE": 100
    },
    {
      "ID": "64V6hlPg5n",
      "MAKE": "Audi",
      "YEAR": 2021,
      "MODEL": "S6",
      "TYPE": "Sedan",
      "PRICE": 100
    },
    {
      "ID": "uKnWAqjnFe",
      "MAKE": "McLaren",
      "YEAR": 2018,
      "MODEL": "570S",
      "TYPE": "Coupe, Convertible",
      "PRICE": 200
    },
    {
      "ID": "udh64Wr38H",
      "MAKE": "McLaren",
      "YEAR": 2017,
      "MODEL": "570GT",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "4rO7nnzTxD",
      "MAKE": "McLaren",
      "YEAR": 2016,
      "MODEL": "650S",
      "TYPE": "Convertible, Coupe",
      "PRICE": 200
    },
    {
      "ID": "cs4sP1pp15",
      "MAKE": "McLaren",
      "YEAR": 2014,
      "MODEL": "MP4-12C",
      "TYPE": "Coupe, Convertible",
      "PRICE": 200
    },
    {
      "ID": "dmtX6KQBKR",
      "MAKE": "McLaren",
      "YEAR": 2018,
      "MODEL": "720S",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "DnvzUtoFGu",
      "MAKE": "McLaren",
      "YEAR": 2016,
      "MODEL": "675LT",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "xQhA2imJUN",
      "MAKE": "McLaren",
      "YEAR": 2018,
      "MODEL": "570GT",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "erZl2UVre0",
      "MAKE": "Lexus",
      "YEAR": 2021,
      "MODEL": "ES",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "ZZ96xi0JoH",
      "MAKE": "Lexus",
      "YEAR": 2021,
      "MODEL": "LC",
      "TYPE": "Coupe,Convertible",
      "PRICE": 200
    },
    {
      "ID": "J1ZpuJQWkg",
      "MAKE": "Lexus",
      "YEAR": 2021,
      "MODEL": "LX",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "0C43khKtgR",
      "MAKE": "Lexus",
      "YEAR": 2021,
      "MODEL": "GX",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "GVzHH79xa6",
      "MAKE": "Lexus",
      "YEAR": 2021,
      "MODEL": "IS",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "ENjF7iettw",
      "MAKE": "Lexus",
      "YEAR": 2021,
      "MODEL": "NX",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "N18m0TTBzT",
      "MAKE": "Lexus",
      "YEAR": 2021,
      "MODEL": "LS",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "V0ivx30qHK",
      "MAKE": "Lexus",
      "YEAR": 2021,
      "MODEL": "RC",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "O1iqTzwSl2",
      "MAKE": "Tesla",
      "YEAR": 2019,
      "MODEL": "Model 3",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "YGYHcyXvfO",
      "MAKE": "Tesla",
      "YEAR": 2021,
      "MODEL": "Model X",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "LwH8Kwr6x7",
      "MAKE": "Tesla",
      "YEAR": 2021,
      "MODEL": "Model S",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "ghbMUP8Pen",
      "MAKE": "Porsche",
      "YEAR": 2021,
      "MODEL": "911",
      "TYPE": "Coupe,Convertible",
      "PRICE": 200
    },
    {
      "ID": "Dhhu1wuiEJ",
      "MAKE": "Porsche",
      "YEAR": 2021,
      "MODEL": "718 Boxster",
      "TYPE": "Convertible",
      "PRICE": 200
    },
    {
      "ID": "eBtjn02Ulz",
      "MAKE": "Porsche",
      "YEAR": 2021,
      "MODEL": "718 Spyder",
      "TYPE": "Convertible",
      "PRICE": 200
    },
    {
      "ID": "bYSRRcZdbP",
      "MAKE": "Porsche",
      "YEAR": 2021,
      "MODEL": "Taycan",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "eiNH4FPtAz",
      "MAKE": "Porsche",
      "YEAR": 2018,
      "MODEL": "911",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "YjL7zDLitf",
      "MAKE": "Porsche",
      "YEAR": 2021,
      "MODEL": "Cayenne",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "451TZBhIBk",
      "MAKE": "Porsche",
      "YEAR": 2021,
      "MODEL": "Panamera",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "TWCNG3bwNm",
      "MAKE": "Porsche",
      "YEAR": 2021,
      "MODEL": "718 Cayman",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "Lmjounk2rk",
      "MAKE": "Porsche",
      "YEAR": 2021,
      "MODEL": "Macan",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "mPYLA0lCwJ",
      "MAKE": "Lamborghini",
      "YEAR": 2014,
      "MODEL": "Gallardo",
      "TYPE": "Coupe, Convertible",
      "PRICE": 200
    },
    {
      "ID": "MyoyXpd3uO",
      "MAKE": "Lamborghini",
      "YEAR": 2018,
      "MODEL": "Huracan",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "zGchNFd63n",
      "MAKE": "Lamborghini",
      "YEAR": 2018,
      "MODEL": "Aventador",
      "TYPE": "Convertible, Coupe",
      "PRICE": 200
    },
    {
      "ID": "f64AMDv9nH",
      "MAKE": "Genesis",
      "YEAR": 2020,
      "MODEL": "G70",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "X69B6CRfTt",
      "MAKE": "Genesis",
      "YEAR": 2021,
      "MODEL": "G80",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "4DOoOaa2pQ",
      "MAKE": "Genesis",
      "YEAR": 2021,
      "MODEL": "G90",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "B7YQ0l7F1I",
      "MAKE": "Genesis",
      "YEAR": 2021,
      "MODEL": "GV80",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "cY7lXXOD1b",
      "MAKE": "Range Rover Sport",
      "YEAR": 2021,
      "MODEL": "Land Rover",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "qJJEzSgQSd",
      "MAKE": "Range Rover Velar",
      "YEAR": 2021,
      "MODEL": "Land Rover",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "5h6faNuQaH",
      "MAKE": "Range Rover",
      "YEAR": 2021,
      "MODEL": "Land Rover",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "h9BxDbA148",
      "MAKE": "Rolls-Royce",
      "YEAR": 2018,
      "MODEL": "Dawn",
      "TYPE": "Convertible",
      "PRICE": 200
    },
    {
      "ID": "KzorgjbbtD",
      "MAKE": "Rolls-Royce",
      "YEAR": 2018,
      "MODEL": "Ghost",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "vxjJPpRl1l",
      "MAKE": "Rolls-Royce",
      "YEAR": 2018,
      "MODEL": "Wraith",
      "TYPE": "Coupe",
      "PRICE": 200
    },
    {
      "ID": "djSMkAaazw",
      "MAKE": "Rolls-Royce",
      "YEAR": 2018,
      "MODEL": "Phantom",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "rJibmHDsdA",
      "MAKE": "Maserati",
      "YEAR": 2018,
      "MODEL": "GranTurismo",
      "TYPE": "Coupe, Convertible",
      "PRICE": 200
    },
    {
      "ID": "7uJ28GeoIE",
      "MAKE": "Maserati",
      "YEAR": 2018,
      "MODEL": "Levante",
      "TYPE": "SUV",
      "PRICE": 200
    },
    {
      "ID": "AjqzScoRcA",
      "MAKE": "Maserati",
      "YEAR": 2019,
      "MODEL": "Ghibli",
      "TYPE": "Sedan",
      "PRICE": 200
    },
    {
      "ID": "K6poOFBbxi",
      "MAKE": "Maserati",
      "YEAR": 2019,
      "MODEL": "Levante",
      "TYPE": "SUV",
      "PRICE": 200
    }
   ]

const seedCars = () => Car.bulkCreate(carData);

module.exports = seedCars;
