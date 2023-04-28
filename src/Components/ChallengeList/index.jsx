import React from 'react'
import ChallengeCard from '../ChallengeCard'
import challenges from '../../Challenges'
import './styles.css'

function ChallengeList() {
  return (
    <div className='card-container'>
      {challenges.map((challenge, index) => (
        <ChallengeCard
          key={index}
          title={challenge.title}
          description={challenge.description}
          solution={challenge.solution}
        />
      ))}
    </div>
  )
}

export default ChallengeList