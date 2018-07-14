import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { rootReducer } from "./services/redux/reducers";
import { requestData, createData } from "./services/redux/actions/request";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(requestData("posts", null, "posts"));
        this.props.dispatch(
            createData(
                "posts",
                { userId: 2, title: "Wakaka", body: "Wakanda" },
                "createPosts"
            )
        );
    }

    render() {
        console.log("this.props :", this.props);
        return this.props.request.data.posts &&
            this.props.request.data.posts._loaded ? (
            this.props.request.data.posts._error ? (
                <div>
                    <h1>Whoops! Something went wrong</h1>
                    <p>{this.props.request.data.posts._errorMessage}</p>
                </div>
            ) : (
                <div>
                    <h1>Result</h1>
                    {this.props.request.data.posts.result.map(post => {
                        return (
                            <div key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        );
                    })}
                </div>
            )
        ) : (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
}

export default connect(rootReducer)(App);
