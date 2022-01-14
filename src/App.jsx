import { useDataWeather } from './hooks/data'

const App = () => {
  const { data, load } = useDataWeather()

  return (
    <>
      <h1>hola</h1>
      {load}
      {data}
    </>
  )
}

export default App
