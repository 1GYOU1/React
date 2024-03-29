import React from 'react'
import { connect } from 'react-redux';
import {getPost, getUsers} from '../modules/sample';
import Sample from '../components/Sample';

const {useEffect} = React; 
const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    useEffect(()=>{//랜더링 될때 getPost, getUsers만 업데이트 시키기 위해 사용 (componentDidMount 마운트될때(시작될 때) 읽어들이기 위함.)
        const fn = async() =>{
            try{
                 await   getPost(1);
                 await   getUsers(1);
                }catch(e){
                    console.log(e)
                }
            };
            fn();
        },[getPost, getUsers]);
  return (
    <Sample post={post}users={users}loadingPost={loadingPost}loadingUsers = {loadingUsers}/>
)
}

export default connect(
    ({sample, loading}) =>({
        post:sample.post,
        users:sample.users,
        loadingPost:loading['sample/GET_POST'],
        loadingUsers:loading['sample/GET_USERS']
    }),
    {
        getPost,
        getUsers
    }//sample과 SampleContainer 연결해서 반환
)(SampleContainer);