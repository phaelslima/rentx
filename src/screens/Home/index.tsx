import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'

import { Car } from '../../components/Car'

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
  Separator
} from './styles'

export function Home() {
  const cartData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'ao dia',
      price: 120
    },
    thumbnail: 'https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png'
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1,2,3,4,5,6,7,8,9,10,11,12,13]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={cartData} />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  )
}