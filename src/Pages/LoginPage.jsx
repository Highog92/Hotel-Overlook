import loginStyle from "./Styles/LoginPage.module.scss"
import { useContext } from "react"
import { UserContext } from "../Context/UserContext"

export function LoginPage() {

  const { userData, setUserData } = useContext(UserContext)
  console.log(userData);

  async function handleSignup(event) {

    event.preventDefault()

    let url = "http://localhost:4000/login"
    
    let body = new URLSearchParams()
    body.append('username', event.target.username.value)
    body.append('password', event.target.password.value)

    console.log(body);

    let options = {
      method: "POST",
      body: body
    }

    try {
      let res = await fetch(url, options)
      let data = await res.json()
      setUserData(data.user)
    } catch (err) {
      console.log(err);
    }


  }
  return (
    <section className={loginStyle.login}>
      <form onSubmit={(event) => handleSignup(event)}>
      <h1>Login Page</h1>
      <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
        <label htmlFor="">Username
          <input name="username" type="text" />
        </label>

        <label htmlFor="">Password
          <input name="password" type="password" />
        </label>
        <input value="Login" type="submit" className={loginStyle.submit} />
      </form>

    </section>
  )
}
