import React, {FC, ReactNode} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS} from '../../../assets';
import {resize} from '../../../utils';

interface InfoRowProps {
  text?: string;
  Icon?: ReactNode;
}

export const InfoRow: FC<InfoRowProps> = ({text = '', Icon}) => {
  return (
    <View style={styles.container}>
      {Icon && <View style={styles.iconContainer}>{Icon}</View>}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 8,
  },
  text: {
    color: COLORS.LIGHT_GREY,
    fontSize: resize.scaleFont(12),
    fontWeight: '500',
  },
});
