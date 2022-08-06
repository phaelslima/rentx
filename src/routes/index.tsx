import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';

import { LoadAnimation } from '../components/LoadAnimation'

interface Props {
  onReady: () => void
}

export function Routes({ onReady }: Props) {
  const { user, loading } = useAuth()
  return (
    loading ? <LoadAnimation /> : (
      <NavigationContainer onReady={onReady}>
        {user.id ? <AppTabRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    )
  )
}