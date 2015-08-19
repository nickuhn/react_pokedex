'use strict';

var React = require('react');
var Pokemon = require('./Pokemon.jsx');
var request = require('superagent');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      pokemon: [{name: "Testermon", type: "bug", height: "19", weight: "42"}]
    }
  },

  componentDidMount: function() {
    for (var i = 1; i <= 151; i++) {
      request
        .get('http://pokeapi.co/api/v1/pokemon/' + i + '/')
        .end(function(err, res) {
          this.setState({
            pokemon: this.state.pokemon.concat([JSON.parse(res.text)])
          })
        }.bind(this));
    }
  },


  render: function() {
    var ourPokemon = this.state.pokemon.map(function(pokemon) {
      return <Pokemon pokemon={pokemon} />
    });

    return (
      <ol>
        { ourPokemon }
      </ol>
    );
  }
});
