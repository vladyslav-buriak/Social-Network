import { NavLink } from 'react-router-dom';
import s from './Friends.module.scss';
import ShowFriendname from './ShowFriendName/ShowFriendsName';



const Friends =(props)=>{
    let state = props.store.getState();
    let friendsElements =state.leftbarPage.friends.map(item=>{
        return  <ShowFriendname name={item.name} url={item.url} key={item.id}/>
    })

 
    
    return(
        <div className={s.friends}>
         <NavLink className={s.title_link} to="/users">Friends</NavLink>
         <div className={s.names_wrapp}>
         {friendsElements}
                  </div>
         
        </div>
    );
}

export default Friends;