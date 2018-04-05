import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    });
  }
  head() {
    return (
      <Helmet>
        <title>{`Users List (${this.props.users.length})`}</title>
        <meta property="og:title" content="Users List" />
      </Helmet>
    );
  }
  render() {
    return (
      <div className="left-align" style={{ marginTop: "100px", marginLeft: "200px" }}>
        {this.head()}
        <h4>List of users:</h4>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
};