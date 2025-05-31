import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {COLORS} from '../../../assets';
import {resize} from '../../../utils';
import {FC} from 'react';
import {MagnifyingGlassIcon} from '../../../assets/icons/magnifying-glass.icon';

interface InputProps extends TextInputProps {}

export const Input: FC<InputProps> = ({
  value,
  onChangeText,
  keyboardType = 'default',
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={COLORS.LIGHT_GREY}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        {...rest}
      />
      <View style={styles.iconContainer}>
        <MagnifyingGlassIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: COLORS.GREY,
    borderRadius: resize.scaleWidth(16),
    height: resize.scaleHeight(42),
    paddingLeft: resize.scaleWidth(16),
    fontSize: resize.scaleFont(14),
    paddingRight: resize.scaleWidth(36),
    color: COLORS.WHITE,
  },
  iconContainer: {
    position: 'absolute',
    right: resize.scaleWidth(14),
  },
});
