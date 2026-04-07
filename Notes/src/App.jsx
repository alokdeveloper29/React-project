import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  const [heading, setheading] = useState('')
  const [notes, setnotes] = useState('')
  const [task, settask] = useState([])

  const submitHandler= (e)=>{
    e.preventDefault()
    setheading('')
    setnotes('')
    
    const copyTask = [...task]
    copyTask.push({heading,notes})
    settask(copyTask)
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    settask(copyTask)
    }

  return (
    <>
  <div className='flex flex-col md:flex-row bg-black min-h-screen'>

    {/* LEFT */}
    <div className='bg-[#BFC9D1] w-full md:w-1/2 flex justify-center items-center p-5'>
      <form 
        className='flex flex-col w-full gap-5'
        onSubmit={(e)=> submitHandler(e)}
      >
        <h1 className='font-semibold text-xl text-[#25343F]'>Add Notes</h1>

        <input 
          className='bg-[#EAEFEF] h-12 border-2 border-black rounded-lg p-5'
          type="text"
          placeholder='Enter your Heading'
          value={heading}
          onChange={(e)=> setheading(e.target.value)}
        />

        <textarea 
          className='bg-[#EAEFEF] h-25 border-2 border-black rounded-lg p-5'
          placeholder='Enter your Notes'
          value={notes}
          onChange={(e)=> setnotes(e.target.value)}
        />

        <button className='bg-[#ff5151] active:scale-95 border-2 border-black rounded-lg h-12 w-40 font-bold text-white'>
          Submitted
        </button>
      </form>
    </div>

    {/* RIGHT */}
    <div className='bg-[#25343F] w-full md:w-1/2 p-5'>
      <h1 className='font-semibold text-xl text-[#EAEFEF] mb-5'>
        Recent Notes
      </h1>

      <div className='flex flex-wrap justify-center md:justify-start h-full overflow-auto'>
        {task.map((elem, idx) => {
          return (
            <div 
              key={idx}
              className='h-60 w-60 p-8 m-3 flex justify-between flex-col bg-cover bg-center 
              bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")]'
            >
              <div>
                <h1 className='font-bold text-xl text-[#ff5151]'>
                  {elem.heading}
                </h1>
                <p className='font-medium text-[#25343F]'>
                  {elem.notes}
                </p>
              </div>

              <button 
                onClick={() => deleteNote(idx)}
                className='font-bold bg-[#ff5151] active:scale-95 p-1 rounded-xl border border-black text-white'
              >
                Delete
              </button>
            </div>
          )
        })}
      </div>
    </div>

  </div>
</>
  )
}

export default App
