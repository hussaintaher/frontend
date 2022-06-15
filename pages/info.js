import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {increment, decrement, selectNumber} from '../slices/counterSlice'
import {useSession} from 'next-auth/react'

const Info = () => {
  const dispatch = useDispatch()
  const val = useSelector(selectNumber)
  const {data: session, status} = useSession()
  console.log(session ,status) 
  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      {val}
    </div>
  )
}

// will pre-render this page at build time using the props returned by
// build time means the first time you build your app (next build)
// we are in development mode, that is why you think getStaticProps is called every time you make refresh
// but in production mode the situation is different 
export async function getStaticProps(context) {
    console.log(context)
    console.log('hussain')
    // always runs on the server and never on the client.
    // does not have access to the incoming request (such as query parameters or HTTP headers)
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default Info