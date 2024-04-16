import { useState } from 'react'
import { View } from 'react-native'
import Player from '../components/player.js'

export default function MatchScreen () {
  const [player1Name, setPlayer1Name] = useState('Jo')
  const [player1Points, setPlayer1Points] = useState(0)
  const [player1HasYellowFlag, setPlayer1HasYellowFlag] = useState(false)

  const [player2Name, setPlayer2Name] = useState('Steve')
  const [player2Points, setPlayer2Points] = useState(0)
  const [player2HasYellowFlag, setPlayer2HasYellowFlag] = useState(false)

  return (
    <View style={{padding: '2%', paddingTop: '10%' }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Player name={player1Name} points={player1Points} setPoints={setPlayer1Points} hasYellowFlag={player1HasYellowFlag} setHasYellowFlag={setPlayer1HasYellowFlag} giveOtherPlayerPoint={() => {setPlayer2Points(player2Points + 1)}}/>
        <Player name={player2Name} points={player2Points} setPoints={setPlayer2Points} hasYellowFlag={player2HasYellowFlag} setHasYellowFlag={setPlayer2HasYellowFlag} giveOtherPlayerPoint={() => {setPlayer1Points(player1Points + 1)}}/>
      </View>
    </View>
  )
}
