import { StackNavigationProp } from '@react-navigation/stack'

export type LoginStackParamList = {
    Home: undefined
    Login: undefined
    Cadastrar: undefined
    Perfil: undefined
}

type type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
    navigation: LoginScreenNvaigationProp
}