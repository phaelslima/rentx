import React, { useState } from 'react'
import { TextInputProps, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import {
  Container,
  IconContainer,
  InputText
} from './styles'

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export function PasswordInput({ iconName, value, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const theme = useTheme()

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(prevState => !prevState)
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={isFocused || isFilled ? theme.colors.main : theme.colors.text_detail}
        />
      </IconContainer>

      <InputText
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={isPasswordVisible}
        {...rest}
      />

      <TouchableOpacity onPress={handlePasswordVisibilityChange}>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={isPasswordVisible ? 'eye': 'eye-off'}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </TouchableOpacity>
    </Container>
  )
}