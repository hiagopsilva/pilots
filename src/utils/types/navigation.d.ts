import {NativeStackNavigationProp} from '@react-navigation/native-stack'

type RootStackParamList = {
  Home: undefined
  Details: undefined
}

export type NavigationType = NativeStackNavigationProp<RootStackParamList>
