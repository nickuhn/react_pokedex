'use strict';

var React = require('react');
var Pokedex = require('./components/Pokedex.jsx')

var App = React.createClass({
  render: function() {
    return (
      <main>
        <h1>Pokedex Reactified</h1>
        <Pokedex />
      </main>
    );
  }
});

React.render(<App />, document.getElementById('Pokedex'));
