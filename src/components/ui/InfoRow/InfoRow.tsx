import React, {FC, ReactNode} from 'react';
import {Text, View, StyleSheet, StyleProp, TextStyle} from 'react-native';
import {COLORS} from '../../../assets';
import {resize} from '../../../utils';

type InfoRowVariant = 'default' | 'detail' | 'rate';
interface InfoRowProps {
  text?: string;
  Icon?: ReactNode;
  variant?: InfoRowVariant;
}

export const InfoRow: FC<InfoRowProps> = ({
  text = '',
  Icon,
  variant = 'default',
}) => {
  const textStyle: Record<InfoRowVariant, StyleProp<TextStyle>> = {
    default: styles.text,
    detail: styles.detail,
    rate: styles.rate,
  };

  return (
    <View style={styles.container}>
      {Icon && <View style={styles.iconContainer}>{Icon}</View>}
      <Text style={[styles.text, textStyle[variant]]}>{text}</Text>
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
  detail: {
    color: COLORS.WHITE,
    fontWeight: '400',
  },
  rate: {
    color: COLORS.ORANGE,
    fontWeight: '400',
  },
});
