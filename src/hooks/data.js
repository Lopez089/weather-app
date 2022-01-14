import { useState, useEffect } from 'react'

export const useDataWeather = () => {
  const [data, setData] = useState('')
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setData('asdfas')
    setLoad(false)
  }, [])

  return { data, load }
}
