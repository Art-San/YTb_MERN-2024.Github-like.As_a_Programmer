import { MdLogout } from 'react-icons/md'
import { useAuthContext } from '../context/AuthContext'
import { toast } from 'react-hot-toast'
//

const Logout = () => {
  const { authUser, setAuthUser } = useAuthContext()

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', { credentials: 'include' })
      const data = await res.json()
      console.log(data)
      toast.success(data.message)
      setAuthUser(null)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <img
        src={authUser?.avatarUrl}
        className="w-10 h-10 rounded-full border border-gray-800"
      />

      <div
        className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800"
        onClick={handleLogout}
      >
        <MdLogout size={22} />
      </div>
    </>
  )
}

export default Logout

// import { MdLogout } from 'react-icons/md'
// // TODO Implement Logout functionality

// const Logout = () => {
//   return (
//     <>
//       <img
//         src={
//           'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
//         }
//         className="w-10 h-10 rounded-full border border-gray-800"
//       />

//       <div className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800">
//         <MdLogout size={22} />
//       </div>
//     </>
//   )
// }

// export default Logout
