import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './UserAvatar.css';
 

const userAvatar = (props) => {
    let src ;
    if(props.userImage){
    src = props.userImage
    }
    else{
    src =  props.initalCharacter;
    }    
 
  return (
    <div className="row-user-avatar">
      <Avatar 
      alt="Image" className= "avatar-sub" 
      onClick = { props.clicked }
      >{ src }</Avatar>
    </div>
  );
}


export default userAvatar;