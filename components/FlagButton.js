import { Pressable, Text } from 'react-native'

export default function FlagButton ({onPress, text, color}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginTop: 7,
        height: 50,
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#616161',
        borderWidth: 1,
        borderRadius: 5,
      }}>
      <Text>{text}</Text>
    </Pressable>
  )
}
