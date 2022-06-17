import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: {label: "email", type: "email", placeholder: "ali@gmail.com",},
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // database look up
        if (
          credentials.username === "ali@gmail.com" &&
          credentials.password === "123456hH"
        ) {
          const user = {identifier: credentials.username, password: credentials.password}
          console.log('cred: ', user)
          const res = await fetch(`${process.env.API_URL}/api/auth/local`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
          })
          const resData = await res.json()
          console.log('user: ', resData)
          // If no error and we have user data, return it
          if (res.ok && resData) {
            // These propereties cann't be changed
            return {
              name: resData.user.username,
              email: resData.user.email,
              image: '15354545'
            }
          }
        }

        // login failed
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
      }
      console.log('token: ', user)
      return token;
    },
    //You can use the session callback to customize the session object returned to 
    //the client if you need to return additional data in the session object.
    async session({ session, token }) {
      // token contains user's data returned from authorize method
      console.log('inside session: ', token)
      if (token) {
        // you can add new properities to session
        session.user.photo = token.provider;
      }
      console.log('session: ', session)
      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true, // ???
  },
  // Allows you to navigate to a custome signin page within pages/auth/signin.js
  pages: {
    signIn: "/auth/signin", // you have to create page called signin
    //signOut: "auth/signOut"
  },
  
});