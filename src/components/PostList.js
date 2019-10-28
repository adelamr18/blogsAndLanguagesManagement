import React from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from '../actions/index';
import UserHeader from './UserHeader';
import {BrowserRouter,Route,Link} from 'react-router-dom';




class PostList extends React.Component {
    componentDidMount(){
        this.setState({
            posts:this.props.fetchPostsAndUsers()
        })
    }

    state = {
        isClickedOnNavigateButton:false,
        posts:[]
    }
    handleNavigation = () =>{
    this.setState({
        isClickedOnNavigateButton:true
    })
    }
    checkWhatToRender(){
        const isClickedOnNavigateButton = this.state.isClickedOnNavigateButton;
        if(this.props.posts){
            if(!isClickedOnNavigateButton){
                return this.renderPosts();
               }
        }
    
    }
    renderPosts(){
        return this.props.posts && this.props.posts.map(post => {
            return (
                <div key={post.id}  className="item">
                    <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }
 
    render(){
        return (
            <div className="ui relaxed divided list">
                <Link onClick={this.handleNavigation} className="ui secondary button" to="/languageTranslations">Navigate to second part</Link>
                {this.props.posts && this.checkWhatToRender()}
            </div>
        )
    }

}
const mapStateToProps = (state) =>{
return {posts:state.posts}
}

export default connect(mapStateToProps,{fetchPostsAndUsers}) (PostList);