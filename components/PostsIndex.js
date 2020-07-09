import { map as _map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

import { Container, Jumbotron,Button } from "react-bootstrap";
class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _map(this.props.posts, post =>
      <li key={post.id} className="list-group-item">
        <Link to={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <Container>
      <Jumbotron>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        <div>
          <Button variant="primary" size="sm" onClick={() => this.props.fetchPosts()}>
            Fetch Mock Data
          </Button>{" "}
        </div>
      </Jumbotron>
    </Container>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
