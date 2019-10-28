import React from 'react';
import PostList from './PostList';
import LanguageTranslation from './LanguageTranslation';
import {BrowserRouter,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPostsAndUsers }from '../actions';

class App  extends React.Component  {
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }
  
    render(){
        return (
            <BrowserRouter>
            <div className="ui container">
                <Route path="/" component={PostList}></Route>
                <Route path="/languageTranslations" posts={this.props.state} component={LanguageTranslation}></Route>
            </div>
            </BrowserRouter>
        )
    }
}
const mapStateToProps = (state) =>{
    return {posts:state.posts}
    }
export default connect(mapStateToProps,{fetchPostsAndUsers}) (App);;