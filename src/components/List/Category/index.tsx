import React from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Skeleton from 'react-native-skeleton-content-nonexpo';
import { ColorTheme } from '../../../constants';
import { ListProps } from '../../../types/component';
import { Category } from '../../../types';

import styles from './styles';

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

const CategoryList: React.FC<ListProps & { data: Category[] }> = ({ data, title }) => (
  <View>
    <Text style={[styles.subtitle, styles.itemTitleContainer]}>{title}</Text>
    {data.length === 0 ? (
      <>
        <Skeleton
          containerStyle={styles.imageSkeleton}
          isLoading={true}
          boneColor={ColorTheme.background2}
          highlightColor={ColorTheme.background1}
          layout={[
            { key: '1', ...styles.normalItemSkeleton },
            { key: '2', ...styles.normalItemSkeleton },
            { key: '3', ...styles.normalItemSkeleton },
            { key: '4', ...styles.normalItemSkeleton },
            { key: '5', ...styles.normalItemSkeleton },
          ]}
        />
        <Skeleton
          containerStyle={styles.titleContainerSkeleton}
          isLoading={true}
          boneColor={ColorTheme.background2}
          highlightColor={ColorTheme.background1}
          layout={[
            { key: '1', ...styles.titleSkeleton },
            { key: '2', ...styles.titleSkeleton },
            { key: '3', ...styles.titleSkeleton },
            { key: '4', ...styles.titleSkeleton },
            { key: '5', ...styles.titleSkeleton },
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
        contentContainerStyle={{ paddingLeft: 16 }}
      />
    )}
  </View>
);

export default CategoryList;
