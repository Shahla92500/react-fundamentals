
export interface User {
  id: string;
  name: string;
  email: string;
}
const users: User[] = [
  { id: 'u1', name: 'Marc', email: 'marc@ex.com' },
  { id: 'u2', name: 'Tom', email: 'tom@ex.com' },
  { id: 'u3', name: 'Rose', email: 'Rose@ex.com' },  
]
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  children?: React.ReactNode;
}

function UserProfileCard(props: UserProfileCardProps){
 
    const profileUsers = users.map((user) => (
    <li key={user.id} style={{ borderBottom: '1px solid #eee', marginBottom: '10px', paddingBottom: '10px' }}>
        {/* Using the dedicated component */}
        <UserProfileCard user={user} />
 
        {/* Or render directly */}
        {/* <h3>{product.name}</h3>
        <p>ID: {product.id}</p>
        <p>Price: ${product.price}</p> */}
    </li>
    ))
  return (
    <div className="grid grid-cols-2 max-w-md mx-auto bg-white rounded-2l pb-2 p-6 text-black text-center">

      <div className="pb-2 " >

      </div>
      {props.children}
    </div>
  )
}

export default UserProfileCard;