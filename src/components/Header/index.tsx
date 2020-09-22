import React from 'react';
import { View } from 'react-native';

interface Props {
  actionLeft: () => void;
  actionRight: () => void;
  iconLeft: string;
  iconRight: string;
  title: string;
}

const Header: React.FC<Props> = ({
  actionLeft,
  actionRight,
  iconLeft,
  iconRight,
  title,
}: Props) => <View />;

export default Header;
