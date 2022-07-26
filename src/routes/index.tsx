import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';

interface Props {
  onReady: () => void
}

export function Routes({ onReady }: Props) {
  const { user } = useAuth()

  return (
    <NavigationContainer onReady={onReady}>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}