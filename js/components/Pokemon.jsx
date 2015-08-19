'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li>
        <span><strong>Name: </strong> {this.props.pokemon.name} </span>
        <span><strong>Speed: </strong> {this.props.pokemon.speed} </span>
        <span><strong>Height: </strong> {this.props.pokemon.height} </span>
        <span><strong>Weight: </strong> {this.props.pokemon.weight} </span>
      </li>
    );
  }
});
