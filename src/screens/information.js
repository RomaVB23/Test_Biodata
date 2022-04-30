import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Item from '../components/item';
import back from '../assets/images/back.png';

const data = [
  {
    functional: 'Представление всех автоматически выявленных рисков',
    free: false,
    subscription: true,
    id: 0,
  },
  {
    functional: 'Хранение исходных файлов анализов свыше 10 мб',
    free: false,
    subscription: true,
    id: 1,
  },
  {
    functional: 'Хранение фото еды, и фотографирование',
    free: false,
    subscription: true,
    id: 2,
  },
  {
    functional: 'Доступ в режим Инфографика',
    free: false,
    subscription: true,
    id: 3,
  },
  {
    functional: 'Полный набор отчетов в моб/веб',
    free: false,
    subscription: true,
    id: 4,
  },
  {
    functional: 'Семейный доступ',
    free: false,
    subscription: true,
    id: 5,
  },
  {
    functional: 'Загрузка и распознавание файлов с медицинскими данными',
    free: true,
    subscription: true,
    id: 6,
  },
  {
    functional: 'Использование дневника диета (вручную или регистрацией фото)',
    free: true,
    subscription: true,
    id: 7,
  },
  {
    functional: 'Генетический паспорт',
    free: true,
    subscription: true,
    id: 8,
  },
  {
    functional: 'Техническая поддержка по email',
    free: true,
    subscription: true,
    id: 9,
  },
  {
    functional: 'Техническая поддержка в чате',
    free: false,
    subscription: true,
    id: 10,
  },
  {
    functional:
      'Предоставление бесплатного доступа профессиональному пользователю, который не зарегистрирован в системе.',
    free: true,
    subscription: true,
    id: 11,
  },
  {
    functional:
      'Просмотр всех юзеров кто имеет доступ к твоим данным, удалении переподключение при необходимости',
    free: true,
    subscription: true,
    id: 12,
  },
  {
    functional:
      'Подключение носимых устройств для отслеживания сна, активности и показателей сердца',
    free: true,
    subscription: true,
    id: 13,
  },
  {
    functional: 'Доступ в web и мобильную версию',
    free: true,
    subscription: true,
    id: 14,
  },
  {
    functional:
      'Шифрование данных, позволяющее надежно защищать данные даже от суперпользователей Биодаты',
    free: true,
    subscription: true,
    id: 15,
  },
  {
    functional:
      'Базовый автоматический анализ рисков и регулярная автоматическая оценка образа жизни',
    free: true,
    subscription: true,
    id: 16,
  },
];

const Information = ({navigation}) => {
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 16}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.title}>
          Почему платная подписка помогает{'\n'}в два раза быстрее достичь цели?
        </Text>
        <View style={styles.table}>
          <Text style={[styles.text, {width: '50%'}]}>Функционал</Text>
          <Text style={[styles.text, {width: '25%'}]}>Бесплатно</Text>
          <Text style={styles.text}>С подпиской</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
        <View style={{height: '30%'}} />
      </View>
    </SafeAreaView>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.36,
    color: '#15284E',
    marginTop: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.52,
    color: '#919AAF',
  },
  table: {
    flexDirection: 'row',
    paddingBottom: 5,
    marginTop: 24,
  },
});
