import React from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Skeleton from 'react-native-skeleton-content-nonexpo';
import { Category } from '../../../types';
import { THEME } from '../../../constants';

import styles from './styles';

type SlideProps = {
  data: Category[];
  product?: boolean;
  title: string;
};

const Item: React.FC<Category> = ({ _id, image, name }: Category) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity style={styles.normalItem} onPress={() => navigate('List', { _id, name })}>
      <Image
        style={styles.normalItemImage}
        source={{ uri: image, cache: 'only-if-cached' }}
        resizeMode="cover"
      />
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.boldText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CategoryList: React.FC<SlideProps> = ({ data, title }: SlideProps) => (
  <View>
    <Text style={[styles.subtitle, styles.itemTitleContainer]}>{title}</Text>
    {data.length === 0 ? (
      <>
        <Skeleton
          containerStyle={{ flex: 1, flexDirection: 'row', paddingLeft: 16, marginBottom: 12 }}
          isLoading={true}
          boneColor={THEME.background2}
          highlightColor={THEME.background1}
          layout={[
            { key: '1', width: 150, height: 100, marginRight: 16, borderRadius: 8 },
            { key: '2', width: 150, height: 100, marginRight: 16, borderRadius: 8 },
            { key: '3', width: 150, height: 100, marginRight: 16, borderRadius: 8 },
            { key: '4', width: 150, height: 100, marginRight: 16, borderRadius: 8 },
            { key: '5', width: 150, height: 100, marginRight: 16, borderRadius: 8 },
          ]}
        />
        <Skeleton
          containerStyle={{ flex: 1, flexDirection: 'row', paddingLeft: 16, marginBottom: 24 }}
          isLoading={true}
          boneColor={THEME.background2}
          highlightColor={THEME.background1}
          layout={[
            { key: '1', width: 150, height: 18, marginRight: 16, borderRadius: 8 },
            { key: '2', width: 150, height: 18, marginRight: 16, borderRadius: 8 },
            { key: '3', width: 150, height: 18, marginRight: 16, borderRadius: 8 },
            { key: '4', width: 150, height: 18, marginRight: 16, borderRadius: 8 },
            { key: '5', width: 150, height: 18, marginRight: 16, borderRadius: 8 },
          ]}
        />
      </>
    ) : (
      <FlatList
        data={data}
        keyExtractor={(item) => String(item._id)}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item }) => <Item _id={item._id} image={item.image} name={item.name} />}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    )}
  </View>
);

export default CategoryList;
