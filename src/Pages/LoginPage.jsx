import loginStyle from "./Styles/Login.module.scss"
import { useState } from "react"


export function LoginPage() {

  const [message, setMessage] = useState("")

  async function handleSignup(event) {

    event.preventDefault()

    let url = "http://localhost:4000/users/1"

    let body = new URLSearchParams()
    body.append('name', event.target.username.value)
    body.append('password', event.target.password.value)

    console.log(body);


    let options = {
      method: "POST",
      body: body
    }

    try {
      let res = await fetch(url, options)
      let data = await res.json()
      setMessage(data)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <section className={loginStyle.login}>
      <h1>Login Page</h1>

      {message && <b>{message}</b>}
      <form onSubmit={(event) => handleSignup(event)}>
        <label htmlFor="">Username
          <input name="username" type="text" />
        </label>

        <label htmlFor="">Password
          <input name="password" type="password" />
        </label>
        <input value="Login" type="submit" />
      </form>

    </section>
  )
}
