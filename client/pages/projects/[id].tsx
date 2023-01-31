import { useRouter } from 'next/router'
import React, { useState } from 'react'

const id = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const { id } = router.query

  // how to import a useState hook in nextjs
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ids, setids] = useState(id)

  return (
    <div>
      <h1>Project {id}</h1>
    </div>
  )
}

export default id