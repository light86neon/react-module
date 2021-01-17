import React from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import './App.css';
import {BaseLayout} from './layouts';
import {Home} from './pages';
import {MovieDetails} from './pages/movie-details';



function  App() {
const history = useHistory();
    return (
        <BaseLayout>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/movie/:id">
                    <MovieDetails />
                </Route>

                <Route>
                    <h1>Page Not Found
                        <button onClick={()=> history.push('/')}>
                            go home
                        </button>
                    </h1>
                </Route>

            </Switch>
        </BaseLayout>
    );
}

export default App;
