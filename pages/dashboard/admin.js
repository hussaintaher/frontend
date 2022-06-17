import { getSession } from "next-auth/react"

const Admin = ({session}) => {
    console.log(session)
  return (
    <div>Admin</div>
  )
}

export async function getServerSideProps(ctx) {
    // always runs on the server and never on the client.
    // does not have access to the incoming request (such as query parameters or HTTP headers)
    return {
        props: {
            session: await getSession(ctx)
        }, // will be passed to the page component as props
    }
}

export default Admin