
import './App.css'
import Section from './SectionMain'
import Footer from './Footer'
import SectionTwo from './Section2'
import SectionThree from './Section3'

function App() {
  return (
    <div className='app'>
    <div className='container'>
      <Section />
      <SectionTwo />
      <SectionThree /> 
    </div>

    <Footer content='Feito por ' /><a link='https://www.github.com/mariprs'>Mariprs</a>
    </div>
  )
}

export default App
