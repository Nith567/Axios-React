

import Weather from './Components/Weather';

function App() {

  return (
    <>
    <div className='flex items-center justify-center space-x-1 bg-red-200'>
  <h1 className='text-center  '>
    So the temp in C  </h1>
  <div className=''>
    <Weather/>
  </div>
</div>
    </>
  )
}

export default App
