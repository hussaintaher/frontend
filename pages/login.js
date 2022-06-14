import getConfig from 'next/config'
import styled from 'styled-components'
import { useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import nookies from 'nookies'

function Login({loginResponse}) {
    const [username, setUsername] = useState('') // or email
    const [password, setPassword] = useState('')

    async function handleLogin() {
        const loginInfo = {
            identifier: username,
            password: password
        }
    
        const login = await fetch(`${process.env.API_URL}/api/auth/local`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })

        const loginResponse = await login.json();

        nookies.set(null, 'jwt', loginResponse.jwt, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
        

    }

	return (
		<>
            <LoginStyled>
                <div variant="container">
                    <div as="h2" my={40}>
                        You need to login to access this page
                    </div>
                    <form>
                        <input type="email" onChange={e => setUsername(e.target.value) } value={username} /><br />
                        <input type="password" onChange={e => setPassword(e.target.value) } value={password} /><br />
                        <button type="button" onClick={() => handleLogin() }>Login</button>
                    </form>
                </div>
            </LoginStyled>
		</>
	);
}

const LoginStyled = styled.div`
    input {
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #cccccc;
        border-radius: 4px;
    }
`

export async function getServerSideProps(ctx) {
    const jwt = parseCookies(ctx).jwt
    console.log('This is JWT', jwt)


    
        const res = await fetch(`${process.env.API_URL}/api/navigations`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        const navigationsRes = await res.json();

        console.log(navigationsRes)

        return {
            props: {
                navigationsRes
            }
        }

        /*
        setCookie(null, 'jwt', loginResponse.jwt , {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })

        Router.push('/')
        */
}

export default Login;