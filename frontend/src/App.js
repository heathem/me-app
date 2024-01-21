import { useEffect, useRef, useState } from 'react';
import './App.css';
import Nav from './components/Nav'

function App() {
  const homeRef = useRef(null)
  const educationRef = useRef(null)
  const workRef = useRef(null)
  const portfolioRef = useRef(null)

  const [education, setEducation] = useState([])
  const [work, setWork] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const educationResponse = await fetch('/education')
    const educationData = await educationResponse.json()
    setEducation(educationData)

    const workResponse = await fetch('/work')
    const workData = await workResponse.json()
    setWork(workData)

    const portfolioResponse = await fetch('/portfolio')
    const portfolioData = await portfolioResponse.json()
    setPortfolio(portfolioData)

    console.log(educationData)
    console.log(workData)
    console.log(portfolioData)
  }

  return (
    <>
      <Nav homeRef={homeRef} educationRef={educationRef} workRef={workRef} portfolioRef={portfolioRef}/>

      <div className='md:h-screen pt-10' ref={homeRef}>
        <div className='md:w-2/4 w-10/12 mx-auto mt-10 mb-3'>
          <h1 className='text-5xl mb-3'>Heather McKinnon</h1>
          <p className='text-2xl text-cyan-900 ml-2'>Software Engineer</p>
        </div>

        <div className='flex md:flex-row flex-col space-between md:w-2/4 m-auto py-5 border rounded-sm px-3 shadow'>
          <img alt='profile' className='rounded-full w-64 h-64 mx-8' src='./2020ChicagoSquare.jpg'></img>
          <div>
            <h5 className='text-2xl text-cyan-900 border-b-2 border-slate-300'>Biography</h5>
            <p className='pt-3'>Hi, my name is Heather. blah blah blah</p>
          </div>
        </div>
      </div>

      <div className='md:h-screen pt-16' ref={educationRef}>
        <div className='mb-5 mx-5'>
          <h1 className='text-5xl mb-3'>My Education</h1>
          <p className='text-lg text-cyan-900'>Here is the education that I have.</p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
          {education && education.map(e => (
            <div key={e.id} className='border rounded-sm p-3 shadow'>
              <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>{e.school} | {e.degree}</h3>
              <h5 className='py-2'>{e.year}</h5>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='md:h-screen pt-16' ref={workRef}>
        <div className='mb-5 mx-5'>
          <h1 className='text-5xl mb-3'>My Work Experience</h1>
          <p className='text-lg text-cyan-900'>Here is some of my relevant work expirience</p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
          {work && work.map(w => (
            <div key={w.id} className='border rounded-sm p-3 shadow'>
              <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>{w.company} | {w.job_title}</h3>
              <h5 className='py-2'>{w.years}</h5>
              <p>{w.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='md:h-screen pt-16' ref={portfolioRef}>
        <div className='mb-5 mx-5'>
          <h1 className='text-5xl mb-3'>My Portfolio</h1>
          <p className='text-lg text-cyan-900'>Take a look at some of my most recent projects that I have built and linked code on github</p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
          {portfolio && portfolio.map(p => (
            <div key={p.id} className='border rounded-sm p-3 shadow'>
              <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>{p.title}</h3>
              <a className='py-2 text-blue-500 hover:text-blue-700 trasition cursor-pointer' href={p.url}>View Code</a>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default App;
