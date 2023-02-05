import React from "react";
import { useParams } from "react-router-dom";//hook

const data = {
    gyou1: {
        name:'규원',
        description : '규오닝 하위'
    },
    gyoumin: {
        name:'규민',
        description : '규미닝 하위'
    }
}

const Profiles = () => {
    const params = useParams();
    const profile = data[params.username];
  
    return (
      <div>
        <h1>사용자 프로필</h1>
        {profile ? (
          <div>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
          </div>
        ) : (
          <p>존재하지 않은 프로필입니다.</p>
        )}
      </div>
    );
  };
  
  export default Profiles;