import { colors } from '@/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { forwardRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { InputContainer } from '../InputContainer/InputContainer';
import { styles } from './Input.styles';
import { InputProps } from './Input.types';

export const Input = forwardRef<TextInput, InputProps>(function Input(
  {
    type = 'text',
    value,
    placeholder,
    label,
    errorMessage,
    prefix,
    suffix,
    ...props
  },
  ref,
) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const showPasswordIcon = isPasswordVisible
    ? 'eye-off-outline'
    : 'eye-outline';
  const isInputPassword = type === 'password';

  const togglePasswordVisibility = () =>
    setIsPasswordVisible((state) => !state);

  return (
    <InputContainer label={label} errorMessage={errorMessage} value={value}>
      <View style={styles.inputArea}>
        {prefix && <View style={styles.iconArea}>{prefix}</View>}
        <TextInput
          ref={ref}
          autoCapitalize="none"
          placeholder={placeholder}
          placeholderTextColor={colors.gray1}
          style={styles.input}
          value={value}
          {...props}
          multiline={type === 'area'}
          secureTextEntry={isInputPassword && !isPasswordVisible}
        />
        {(isInputPassword || suffix) && (
          <View style={styles.iconArea}>
            {isInputPassword ? (
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <MaterialCommunityIcons
                  name={showPasswordIcon}
                  size={24}
                  color={colors.gray1}
                />
              </TouchableOpacity>
            ) : (
              suffix
            )}
          </View>
        )}
      </View>
    </InputContainer>
  );
});
