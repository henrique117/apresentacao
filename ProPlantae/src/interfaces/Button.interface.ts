export interface ButtonProps {
    onPress: () => void
    title: string
    type: 'google' | 'face' | 'email'
}