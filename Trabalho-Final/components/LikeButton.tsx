import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons'; // Importe o ícone necessário

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const LikeButton: React.FC = () => {
  const [liked, setLiked] = useState(false);
  const scale = useSharedValue(1);

  const handlePress = () => {
    setLiked(!liked);
    scale.value = withSpring(liked ? 1 : 1.5, { damping: 10, stiffness: 100 });
  };

  const animatedStyle = useSharedValue(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <AnimatedTouchableOpacity onPress={handlePress} style={[styles.button, animatedStyle.value as any ]}>
      <AntDesign name={liked ? 'heart' : 'hearto'} size={10} color={liked ? 'red' : 'black'} />
    </AnimatedTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  }
});

export default LikeButton;