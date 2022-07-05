import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components'

import {
  Container,
  Title
} from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  color?: string
  loading?: boolean
}

export function Button({ title, color, disabled, loading = false, ...rest }: Props) {
  const theme = useTheme()

  return (
    <Container
      {...rest}
      color={color}
      disabled={disabled}
      style={{ opacity: (disabled || loading) ? .5 : 1 }}
    >
      { loading
        ? <ActivityIndicator color={theme.colors.shape} />
        : <Title>{title}</Title>
      }
    </Container>
  )
}