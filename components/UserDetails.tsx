import authService from '@/app/appwrite/auth';
import { useEffect, useState } from 'react'

function UserDetails(userId: any) {
    console.log(userId);
    const [user, setUser] = useState({} as any);

    const getUser = async (userId: string) => {
        const user = await authService.getUserDatabase(userId);
        setUser(user);
      };

      useEffect(() => {
        getUser(userId);
      }, [userId]);

  return (
    <div>
        <h2>{user?.name}</h2>
        <h2>User: {user?.email}</h2>
        <h2>{user?.role}</h2>
    </div>
  )
}

export default UserDetails