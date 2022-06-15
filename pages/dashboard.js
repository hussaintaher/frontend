import React from 'react'
import {getSession} from 'next-auth/react'
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

const Dashboard = () => {
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        async function getUserSession() {
            const session = await getSession()
            if (!session) {
                router.push('/')
            } else {
                setLoading(false)
            }
        }
        getUserSession();
    }, [])

  if (loading) {
      return (
          <h1>Dadhboard is loading</h1>
      )
  }

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard