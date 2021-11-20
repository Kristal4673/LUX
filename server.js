const path = require('path');
const express = require('express');
const sequelize = require("./config/connection");
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const { hasSubscribers } = require('diagnostics_channel');


// import { sequelize } from './config/connection';
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

//handlbar helper function
// exphbs.Handlebars.registerHelper('if_even', function(conditional, options){
//   if((conditional % 2) == 0){
//     return options.fn(this);
//   } else {
//     return options.inverse(this);
//   }
// });

// exphbs.ExpressHandlebars.

// exphbs.Handlebars.registerHelper('if_odd', function(conditional, options){
//   if((conditional % 2) == 1){
//     return options.fn(this);
//   } else {
//     return options.inverse(this);
//   }
// });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
