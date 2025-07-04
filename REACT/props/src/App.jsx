import Student from './Student'

function App() {

  return (
    <>
      <Student name='Osayemi' age={17} isStudent={true}/>
      <Student name='Daniel' age='12' isStudent={false}/>
      <Student name='Olamilekan' age={17} isStudent={true}/>
      <Student />
    </>
  )
}

export default App
