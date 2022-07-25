import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi'

const CreateTask = () => {

    const [showForm, setShowForm] = useState(false)
    // console.log(showForm)
  return (
    <div className='create-container'>
      <div className='create-info'>
        top 
        <button onClick={()=> {setShowForm(true)}}>
            <HiPlus />
        </button>
      </div>
      {showForm && <div className='create-data'>
        <form className='create-form'>
            <label>task desc</label>
            <input placeholder='enter desc'/>
            <label> date</label>
            <input type={'date'}/>
            <label>Time</label>
            <input type={'time'} 
                   placeholder='Time'/>
            <label>Assign User</label>
            <input />
            <button onClick={()=> {setShowForm(false)}}>Cancel</button>
            <button>Save</button>
        </form>
      </div>}
    </div>
  )
}

export default CreateTask
