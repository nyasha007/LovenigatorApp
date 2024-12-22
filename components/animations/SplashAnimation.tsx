import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  withSpring,
  withRepeat,
  withSequence,
  runOnJS,
} from 'react-native-reanimated';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const { width, height } = Dimensions.get('window');

const SplashAnimation = ({ onAnimationComplete }) => {
  const fillLevel = useSharedValue(0);
  const sway = useSharedValue(0);
  const tilt = useSharedValue(0);

  useEffect(() => {
    // Start water filling animation
    fillLevel.value = withTiming(1, { duration: 2000 });

    // Add water swaying effect
    sway.value = withRepeat(
      withSequence(withSpring(1), withSpring(-1)),
      3,
      true
    );

    // Simulate tilt (3D effect)
    tilt.value = withSequence(
      withSpring(15, { damping: 5 }),
      withSpring(-15, { damping: 5 }),
      withTiming(0, { duration: 1000 }, () => {
        runOnJS(onAnimationComplete)();
      })
    );
  }, [fillLevel, sway, tilt, onAnimationComplete]);

  const waterPathProps = useAnimatedProps(() => {
    const waterLevel = height * (1 - fillLevel.value);
    const swayOffset = sway.value * 20;

    return {
      d: `
        M 0 ${height}
        L 0 ${waterLevel}
        C ${width * 0.3 + swayOffset} ${waterLevel - 40}
          ${width * 0.7 - swayOffset} ${waterLevel - 40}
          ${width} ${waterLevel}
        L ${width
