
export default function Login({setIsLogin}:{setIsLogin: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className="login_page">
      <h1>hy! User please Log in to see your List</h1>
      <button className="login" onClick={() => setIsLogin((prev) => !prev) }>Login</button>
    </div>
  )
}
