import React, { Component } from 'react';

class Course extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: null
        }
    }

    updateTitle() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            if (param[0].toLowerCase() === 'title' && this.state.title !== param[1]) {
                this.setState({ title: param[1] });
            }
        };
    }

    componentDidMount() {
        this.updateTitle();
    }

    componentDidUpdate() {
        this.updateTitle();
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.movieId}</p>
            </div>
        );
    }
}

export default Course;