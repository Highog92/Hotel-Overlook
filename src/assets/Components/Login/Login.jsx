import formStyle from './login.module.scss'


export function Login({ submitAction, children }) {

  return (
    <section>
      <form className={formStyle.form} onSubmit={(e) => submitAction(e)}>{children}</form>
    </section>
  )
}
