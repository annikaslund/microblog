import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';

class Routes extends Component {

    render() {
        return (
            <div className="Routes">
                <Switch>
                    <Route exact path="/" 
                           render={() => 
                                <PostList />} />
                    
                    <Route exact path="/new" 
                           render={(rtProps) => 
                                <NewPostForm { ...rtProps }/>} />

                    <Route exact path="/:postId" 
                           render={() => 
                                <PostDetail />} />

                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default Routes;