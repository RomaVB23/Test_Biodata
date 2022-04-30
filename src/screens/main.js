import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';

// components
import Period from '../components/period';
import Butn from '../components/butn';
// images
import clock from '../assets/images/clock.png';
import lightning from '../assets/images/lightning.png';

export default function Main({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{paddingHorizontal: 16}}>
          <Text style={styles.title}>Подписка</Text>

          <View style={styles.promoContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image source={clock} style={styles.promoImage} />
              <View style={styles.promoTextContainer}>
                <Text style={styles.promoTextTitle}>
                  Уникально низкая цена{'\n'}
                  только сейчас
                </Text>
                <Text style={styles.promoTextSubtitle}>
                  Предложение актуально до{'\n'}
                  активации бесплатного периода
                </Text>
              </View>
            </View>
            <View style={{marginTop: 16}}>
              <Period mounth={'1 месяц'} oldCost={279} newCost={79} />
              <Period mounth={'3 месяца'} oldCost={749} newCost={249} />
              <Period mounth={'6 месяцев'} oldCost={1290} newCost={490} />
              <Period
                mounth={'1 год'}
                oldCost={'2 290'}
                newCost={'1 145'}
                popular
              />
            </View>
          </View>

          <View style={styles.subscriptionContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image source={lightning} style={styles.subscriptionImage} />
              <Text style={styles.subscriptionText}>
                Почему платная{'\n'}
                подписка помогает{'\n'}в два раза быстрее{'\n'}
                достичь цели?
              </Text>
            </View>
            <Butn
              text={'Узнать'}
              onPress={() => {
                navigation.navigate('InformationPage');
              }}
            />
          </View>

          <Text style={styles.freeSubtitle}>Бесплатный пробный период</Text>
          <Text style={styles.freeText}>
            Подойдёт для знакомства с приложением.{'\n'}В любой момент можно
            приобрести премиум-{'\n'}
            подписку и получить доступ к полному{'\n'}
            функционалу
          </Text>
          <View style={styles.freeContainer}>
            <Text style={styles.freeTitle}>Бесплатно на 15 дней</Text>
            <Butn text={'Попробовать'} blue />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FE',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 32,
    color: '#15284E',
  },
  promoContainer: {
    width: '100%',
    padding: 16,
    backgroundColor: '#81B578',
    borderRadius: 12,
    marginTop: 16,
  },
  promoTextContainer: {
    marginLeft: 16,
    justifyContent: 'space-around',
  },
  promoImage: {
    width: 88,
    height: 88,
  },
  promoTextTitle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.36,
    color: '#FFFFFF',
  },
  promoTextSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.52,
    color: '#FFFFFF',
  },
  period: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  periodMounth: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.78,
  },
  periodOldCost: {
    textDecorationLine: 'line-through',
    textDecorationColor: '#E35953',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: '#919AAF',
    marginRight: 13,
  },
  subscriptionContainer: {
    width: '100%',
    backgroundColor: '#EF9611',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  subscriptionImage: {
    width: 88,
    height: 88,
  },
  subscriptionText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.36,
    color: '#FFFFFF',
    marginLeft: 16,
  },
  freeSubtitle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.36,
    color: '#15284E',
    marginTop: 32,
  },
  freeText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: '#15284E',
    marginTop: 8,
  },
  freeContainer: {
    marginTop: 16,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    paddingTop: 24,
  },
  freeTitle: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.78,
    color: '#15284E',
    textAlign: 'center',
  },
});
