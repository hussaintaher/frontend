import { getCsrfToken } from "next-auth/react"

export default function SignIn({ csrfToken }) {
  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Email address
        <input type="email" id="username" name="username" />
        <input type="password" id="password" name="password" />
      </label>
      <button type="submit">Sign in with Email</button>
    </form>
  )
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken },
  }
}