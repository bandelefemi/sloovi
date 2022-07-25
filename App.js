import React from 'react'
import CreateTask from './components/CreateTask'
import ShowTask from './components/ShowTask'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

    const [apiData, setApiData] = useState([])

    useEffect(()=> {
        // axios.get(`https://62adf581b735b6d16a3cc977.mockapi.io/tweetData`)
        axios.get(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=<company_id>`)


        .then((response)=> {
            setApiData(response.data)
        })
    }, [])

    const getData=()=> {
        // axios.get(`https://62adf581b735b6d16a3cc977.mockapi.io/tweetData`)
        axios.get(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=<company_id>`)

        .then((getData)=> {
            setApiData(getData.data)
        })
    }

    console.log(apiData && apiData)
  return (
    <div className='app-container'>
        <div className='left-sidebar'>
            hello
        </div>
        <div className='right-page'>
            <div className='nav-bar'>
                nav bar
            </div>
            <div className='content-area'>
                
                <CreateTask getData={getData}/>

                <div>
                    <ShowTask apiData={apiData} getData={getData} />
                </div>

            </div>
        </div>
    </div>
  )
}

export default App