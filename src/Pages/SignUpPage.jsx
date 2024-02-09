import { useState } from "react"
import SignUpPageStyle from "./Styles/SignUpPage.module.scss"


export function SignUpPage() {



    async function handleSignup(event) {


        event.preventDefault()

        const activeValue = 1;
        const org_idValue = 1;
        const refresh_tokenValue = "1234";
        const groupsValue = 1;



        let url = "http://localhost:4000/users"

        let body = new URLSearchParams()
        body.append('firstname', event.target.username.value)
        body.append('lastname', event.target.lastname.value)
        body.append('email', event.target.email.value)
        body.append('password', event.target.password.value)
        body.append("is_active", activeValue);
        body.append("org_id", org_idValue);
        body.append("refresh_token", refresh_tokenValue);
        body.append("groups", groupsValue);




        console.log(body);


        let options = {
            method: "POST",
            body: body

        }

        try {
            let res = await fetch(url, options)
            let data = await res.json()
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }




    return (
        <section className={SignUpPageStyle.SignUp}>
            <form onSubmit={(event) => handleSignup(event)}>
                <h1>Sign Up</h1>
                <p>Indtast dine informationer for at oprette en bruger</p>
                <label htmlFor="">Firstname
                    <input name="firstname" type="text" />
                </label>
                <label htmlFor="">Lastname
                    <input name="lastname" type="text" />
                </label>
                <label htmlFor="">Email
                    <input name="email" type="email" />
                </label>
                <label htmlFor="">Password
                    <input name="password" type="password" />
                </label>
                <input value="Sign up" type="submit" className={SignUpPageStyle.submit} />
            </form>
        </section >
    )
}
