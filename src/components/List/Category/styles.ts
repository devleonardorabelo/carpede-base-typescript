import { StyleSheet } from 'react-native';
import { TextTheme, SizeTheme } from '../../../constants';

export default StyleSheet.create({
  itemTitleContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  subtitle: TextTheme.subtitle,
  boldText: TextTheme.boldText,
  normalItem: {
    width: SizeTheme.category.normal.width,
    marginBottom: 24,
    marginRight: 16,
  },
  normalItemSkeleton: {
    width: SizeTheme.category.normal.width,
    height: SizeTheme.category.normal.height,
    borderRadius: SizeTheme.borderRadius,
    marginBottom: 8,
    marginRight: 16,
  },
  normalItemImage: {
    width: SizeTheme.category.normal.width,
    height: SizeTheme.category.normal.height,
    borderRadius: SizeTheme.borderRadius,
    marginBottom: 8,
  },
  imageSkeleton: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 16,
  },
  titleContainerSkeleton: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 16,
    marginBottom: 24,
  },
  titleSkeleton: {
    width: SizeTheme.category.normal.width,
    height: 18,
    borderRadius: SizeTheme.borderRadius,
    marginBottom: 8,
    marginRight: 16,
  },
});
