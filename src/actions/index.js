import jsonPlaceholder from '../apis/jsonPlaceHolder';
import _ from 'lodash';



export const fetchPostsAndUsers = () => async (dispatch, getState)=>{
   await dispatch(fetchPosts());
//    const userIds= _.uniq(_.map(getState().posts,'userId'));
//    userIds.forEach(id => dispatch(fetchUser(id)));
   _.chain(getState().posts).map('userId').uniq().forEach(id => dispatch(fetchUser(id)))
   .value();

}

//da keda el taht el equivelant le hetet dispatch we keda
// function (){
//     return function(){

//     }
// }



export const fetchPosts = () => async  dispatch => { 
        const response =  await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    };
//using redux thunk bey5liny a return a function we astana el response le 7ad 
//ma yeegy we ba3d ma yeegy ana ba manually dispatch an action(dispatch an action) be 2eedy 
//then hena ehna benraga3 a plain js object then el action de betetb3et le el dispatch
//dispatch ba3diha beyb3atha le redux thunk and then redux thunk checks we teshof
//heya object wala function law object ba3melha return 3ady enama law action
//beykmel el flow we ghaleban de betkon aslan your action(object)

//dispatch we getState bey5lik te take control over kol redux ya3ny te modify state
//teshel haga aw te3mel be ay haga 


//we are here defining a function that returns a function heya de tari2et redux thunk ba2a ya man 
export const fetchUser = (id) => async dispatch =>{
    const response = await jsonPlaceholder.get(`users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}
// export const fetchUser = (id) =>  dispatch => _fetchUser(id,dispatch);
// const _fetchUser = _.memoize(async(id,dispatch) =>{
//     const response = await jsonPlaceholder.get(`users/${id}`);
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     }) 
// });