import React, { useRef, useState } from 'react';
import { Dimensions, Animated, Text } from 'react-native';

type OrderFooterProps = {
  active: boolean;
};

const OrderFooter: React.FC<OrderFooterProps> = ({ active }: OrderFooterProps): JSX.Element => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const refHeight = useRef(new Animated.Value(60)).current;
  const refOpacityHeader = useRef(new Animated.Value(1)).current;
  const refOpacityBody = useRef(new Animated.Value(0)).current;

  const showOrderFooter = () => {
    Animated.timing(refOpacityHeader, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(refHeight, {
      toValue: Dimensions.get('window').height,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(refOpacityBody, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setIsAnimated(true);
  };

  const fadeOrderFooter = () => {
    setIsAnimated(false);
    Animated.timing(refOpacityHeader, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(refHeight, {
      toValue: 60,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(refOpacityBody, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    active && (
      <Animated.View style={[{ height: refHeight }]}>
        <Text>Olá</Text>
      </Animated.View>
    )
  );
};

export default OrderFooter;
