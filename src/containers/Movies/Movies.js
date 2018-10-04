import React, { Component } from 'react';
import './Movies.css';
import { Route, Link } from 'react-router-dom'
import Movie from '../Movie/Movie'

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                { id: 1, title: 'Platoon' },
                { id: 2, title: 'Forest Gump' },
                { id: 3, title: 'Revenge Of The Nerds' }
            ]
        }
    }


    render() {
        return (
            <div>
                <h1>Amazing Movies To Watch</h1>
                <section className="Movies">
                    {
                        this.state.movies.map(movie => {
                            return (
                                <Link
                                    key={movie.id}
                                    to={{
                                        pathname: `${this.props.match.url}/${movie.id}`,
                                        search: `?title=${movie.title}`
                                    }}>
                                    <article className="Movie" >{movie.title}</article>
                                </Link>
                            )
                        })
                    }
                </section>
                <Route path={`${this.props.match.url}/:movieId`} component={Movie} />
            </div>
        );
    }
}

export default Courses;