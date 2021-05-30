import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Nav from  './components/Nav/Nav';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
    
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Nav />
                <div className="main__content">
                    <Route path="/messages" render={ () => <Messages /> } />
                    <Route path="/profile/:userId?" render={ () => <ProfileContainer /> } />
                    <Route path="/find-users" render={ () => <FindUsersContainer /> } />
                    <Route path="/news" component={ () => <News /> } />
                    <Route path="/music" component={ () => <Music /> } />
                    <Route path="/settings" component={ () => <Settings /> } />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
