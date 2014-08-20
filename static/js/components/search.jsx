/**
 * @jsx React.DOM
 */
var React = require('react/addons');
var PureRenderMixin = require('react').addons.PureRenderMixin;


var Search = React.createClass({
  mixins: [PureRenderMixin],
  
  render: function() {
    return (
      <input type="search" placeholder="Enter search query" />
    );
  }
});

module.exports = Search;