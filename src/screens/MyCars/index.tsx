import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, StatusBar } from 'react-native'
import { useTheme } from 'styled-components'
import { AntDesign } from '@expo/vector-icons'

import { api } from '../../services/api'

import { Car } from '../../components/Car'
import { BackButton } from '../../components/BackButton'
import { CarDTO } from '../../dtos/CarDTO'

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate
} from './styles'
import { Load } from '../../components/Load'


interface CarProps {
  id: string
  car: CarDTO
  user_id: string
  startDate: string
  endDate: string
}

export function MyCars() {
  const navigation = useNavigation()
  const theme = useTheme()

  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  function handleBack() {
    navigation.goBack()
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1')
        setCars(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle='light-content'
          translucent
          backgroundColor="transparent"
        />
        <BackButton
          onPress={handleBack}
          color={theme.colors.shape}
        />

        <Title>
          Seus agendamentos, {`\n`}
          estão aqui.
        </Title>

        <SubTitle>
          Conforto, segurança e praticidade.
        </SubTitle>
      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>

        { loading
          ? <Load />
          : (
            <FlatList
              data={cars}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <CarWrapper>
                  <Car data={item.car} />
                  <CarFooter>
                    <CarFooterTitle>Periodo</CarFooterTitle>
                    <CarFooterPeriod>
                      <CarFooterDate>{item.startDate}</CarFooterDate>
                      <AntDesign
                        name="arrowright"
                        size={20}
                        color={theme.colors.title}
                        style={{ marginHorizontal: 10 }}
                      />
                      <CarFooterDate>{item.endDate}</CarFooterDate>
                    </CarFooterPeriod>
                  </CarFooter>
                </CarWrapper>
              )}
            />
          )
        }
      </Content>
    </Container>
  )
}