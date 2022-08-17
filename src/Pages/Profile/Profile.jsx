import React, {useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    const isLoggedIn = !!user

    useEffect(() => {
      if (!isLoggedIn) {
        navigate('/login')
      }
    }, [isLoggedIn])

  return (
    <>
      <div className="phanton">
        <div className="profile-container">
          <h3>Mi Perfil</h3>
          {
          isLoggedIn ?
            (
              <>
                <p>
                  <strong>Bienvenido:</strong> {user.username}
                </p>
                <h5>Proximamente veras aqui tu seccion de favoritos...</h5>
              </>
            )
            :
            (
              <p>No estás dentro de tu cuenta</p>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Profile;