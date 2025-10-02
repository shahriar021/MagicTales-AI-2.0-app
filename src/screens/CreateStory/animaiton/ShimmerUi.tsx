import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

const ShimmerEffect = () => {
  const shimmerAnim = new Animated.Value(-300); // Initial position for the shimmer

  // Set up the shimmer animation
  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 300, // End position (shimmer moves right)
        duration: 1500, // Animation duration
        easing: Easing.linear, // Linear easing for smooth animation
        useNativeDriver: true, // Use native driver for performance
      })
    ).start();
  }, []);

  // Interpolate shimmer animation to control movement
  const translateX = shimmerAnim.interpolate({
    inputRange: [-300, 0, 300], // Start, middle, and end values
    outputRange: [-300, 0, 300], // Corresponding position for translateX
  });

  return (
    <View style={styles.shimmerContainer}>
      {/* Animated View for Shimmer Effect */}
      <Animated.View
        style={[
          styles.shimmer,
          {
            transform: [{ translateX }], // Apply the interpolated translateX
          },
        ]}
      >
        <LinearGradient
          colors={['#f0f0f0', '#e0e0e0', '#f0f0f0']} // Gradient shimmer effect
          style={styles.gradient}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  shimmerContainer: {

    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden'
  },
  shimmer: {
    flex: 1,
    borderRadius: 4,

  },
  gradient: {
    flex: 1,
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ShimmerEffect