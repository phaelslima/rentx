import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './stack.routes';

interface Props {
  onReady: () => void
}

export function Routes({ onReady }: Props) {
  return (
    <NavigationContainer onReady={onReady}>
      <StackRoutes />
    </NavigationContainer>
  )
}