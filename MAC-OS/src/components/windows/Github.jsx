import React from 'react'
import MacWindow from './MacWindow'
import github from '../../assets/github.json'
import './github.scss'

const GitCard = ({data}) => {
    return <div className="card">
        <img src={data.image} alt="avatar" />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className="tags">
            {data.tags.map((elem)=>{
                return <p className='tag'>{elem}</p>
            })}
        </div>
        <div className="urls">
            <a href={data.repoLink}>Repository </a>
            {data.demoLink && <a href={data.demoLink}>Demo</a>}
        </div>
    </div>
}

const Github = () => {
  return (
    <MacWindow>
        <div className="cards">
            {github.map((elem, idx)=>{
                return <GitCard key={idx} data={elem} />
            })}
        </div>
    </MacWindow>
  )
}

export default Github
