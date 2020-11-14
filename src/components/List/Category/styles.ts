import { StyleSheet } from 'react-native';
import { THEME } from '../../../constants';

export default StyleSheet.create({
  itemTitleContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  subtitle: THEME.subtitle,
  boldText: THEME.boldText,
  normalItem: {
    width: THEME.category.normal.width,
    marginBottom: 24,
    marginRight: 16,
  },
  normalItemSkeleton: {
    width: THEME.category.normal.width,
    height: THEME.category.normal.height,
    borderRadius: THEME.borderRadius,
    marginBottom: 8,
    marginRight: 16,
  },
  normalItemImage: {
    width: THEME.category.normal.width,
    height: THEME.category.normal.height,
    borderRadius: THEME.borderRadius,
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
    width: THEME.category.normal.width,
    height: 18,
    borderRadius: THEME.borderRadius,
    marginBottom: 8,
    marginRight: 16,
  },
});
