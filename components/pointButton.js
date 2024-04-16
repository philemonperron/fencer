import { Pressable, Text } from 'react-native'

export default function PointButton ({onPress, text}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
      marginTop: 7,
      height: 70,
      width: 70,
      backgroundColor: '#E0E0E0',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#616161',
      borderWidth: 1,
      borderRadius: 10,
    }}>
      <Text style={{fontSize: 25}}>{text}</Text>
    </Pressable>
  )
}
