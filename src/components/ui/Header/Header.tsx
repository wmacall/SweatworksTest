import React, {FC, ReactNode} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BackIcon} from '../../../assets/icons/back.icon';
import {resize} from '../../../utils';
import {COLORS} from '../../../assets';

interface HeaderProps {
  title: string;
  rightIcon?: ReactNode;
  onRightIconPress?: () => void;
}

export const Header: FC<HeaderProps> = ({
  title,
  rightIcon,
  onRightIconPress,
}) => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.containerHeader}>
      <SafeAreaView />
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={goBack}
          style={styles.leftIconContainer}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        {rightIcon && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onRightIconPress}
            style={styles.rightIconContainer}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {zIndex: 10},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: resize.scaleWidth(24),
    paddingBottom: resize.scaleHeight(20),
    paddingTop: resize.scaleHeight(10),
  },
  leftIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: resize.scaleHeight(36),
    width: resize.scaleWidth(36),
  },
  title: {
    fontSize: resize.scaleFont(16),
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
    color: COLORS.WHITE,
  },
  rightIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: resize.scaleHeight(36),
    width: resize.scaleWidth(36),
  },
});
