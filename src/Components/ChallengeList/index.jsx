import React from 'react'
import ChallengeCard from '../ChallengeCard'
import challenges from '../../Challenges'

function ChallengeList() {
  return (
    <div>
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