import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'

import { Button, StyleSheet } from 'react-native'
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import BrandSvg from '../../assets/brand.svg'
import LogoSvg from '../../assets/logo.svg'

import {
  Container
} from './styles'

export function Splash() {
  const navigation = useNavigation()

  const splashAnimation = useSharedValue(0)

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0], Extrapolate.CLAMP),
      transform: [{ translateX: interpolate(splashAnimation.value, [0, 50], [0, -50], Extrapolate.CLAMP) }]
    }
  })

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, .3, 1], Extrapolate.CLAMP),
      transform: [{ translateX: interpolate(splashAnimation.value, [0, 50], [-50, 0], Extrapolate.CLAMP) }]
    }
  })

  function startApp() {
    navigation.reset({ routes: [ { name: 'SignIn' } ] })
  }

  useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      { duration: 1000 },
      () => {
        'worklet'
        runOnJS(startApp)()
      }
    )
  }, [])

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})