export interface ProfileProps{
    name:string
}

const Profile = ({name}:ProfileProps) => {
  return (
    <div>Private Profile Component</div>
  )
}

export default Profile