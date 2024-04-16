import { Text, View } from 'react-native'
import FlagButton from './FlagButton.js'
import PointButton from './pointButton.js'

export default function Player ({ name, points, setPoints, hasYellowFlag, setHasYellowFlag, giveOtherPlayerPoint }) {
  const handleYellowFlag = () => {
    hasYellowFlag ? giveOtherPlayerPoint() : setHasYellowFlag(true)
  }

  return (
    <View
      style={{
        width: 150
      }}>
      <View style={{
        height: 170,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        borderRadius: 10
      }}>
        <View testID={'playerName'} style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 7 }}>
          <Text style={{ fontSize: 20 }}>{name}</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
          <Text style={{ fontSize: 50 }}>{points}</Text>
        </View>
      </View>
      <View style={{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          height: 20,
          width: 20,
          borderColor: '#616161',
          borderWidth: 1,
          borderRadius: 2,
          backgroundColor: hasYellowFlag ? '#FFEB3B' : '#FAFAFA'
        }} />
      </View>
      <View>
        <FlagButton
          onPress={() => {handleYellowFlag()}}
          text={'Yellow'}
          color={'#FFEB3B'}
        />
        <FlagButton
          onPress={() => {giveOtherPlayerPoint()}}
          text={'Red'}
          color={'#F44336'}
        />
        <FlagButton
          onPress={() => {console.log('black')}}
          text={'Black'}
          color={'#757575'}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <PointButton text={'+'} onPress={() => {setPoints(points + 1)}} />
          <PointButton text={'-'} onPress={() => {setPoints(points - 1)}} />
        </View>
      </View>
    </View>
  )
}
