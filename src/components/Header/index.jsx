import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth.jsx'
import { Container, Profile, Logout } from './styles.js'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api.js'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { signOut, user } = useAuth()
  const navigage = useNavigate()

  function handleSignOut() {
    navigage("/")
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return(
    <Container>
      <Profile to='/profile'>
        <img src={avatarUrl} alt={user.name} />

        <div>
          <span>Bem Vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
      
    </Container>
  )
}