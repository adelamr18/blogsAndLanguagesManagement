import React from 'react';
import PostList from './PostList';
import LanguageTranslation from './LanguageTranslation';
function ComponentsContainer(props) {
    const isClickedOnNavigateButton = props.isClickedOnNavigateButton;
    if(isClickedOnNavigateButton){
        return <LanguageTranslation/>
    }
    else {
        return <PostList/>
    }
}
export default ComponentsContainer;