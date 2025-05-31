import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface TabsProps {
  tabs: string[];
}

export const Tabs: React.FC<TabsProps> = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(0);
  const indicatorPosition = useSharedValue(0);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    indicatorPosition.value = withTiming(index * 100); // Assuming each tab is 100px wide
  };

  const animatedIndicatorStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      transform: [{translateX: indicatorPosition.value}],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tab}
            onPress={() => handleTabPress(index)}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Animated.View style={[styles.indicator, animatedIndicatorStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
  },
  indicator: {
    height: 4,
    width: 100, // Assuming each tab is 100px wide
    backgroundColor: 'pink',
    position: 'absolute',
    bottom: 0,
  },
});
