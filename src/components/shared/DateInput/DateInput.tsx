import { colors } from '@/styles';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { SquarePen } from 'lucide-react-native';
import moment from 'moment';
import { forwardRef, useState } from 'react';
import { Platform, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { InputContainer } from '../InputContainer/InputContainer';
import { styles } from './DateInput.styles';
import { DateInputProps } from './DateInput.types';

const DATE_FORMAT = 'DD/MM/YYYY';

const today = new Date();

export const DateInput = forwardRef<TextInput, DateInputProps>(
  function DateInput(
    {
      value,
      label,
      placeholder = DATE_FORMAT,
      errorMessage,
      prefix,
      suffix,
      onChange,
      editable,
      ...props
    },
    ref,
  ) {
    const [inputText, setInputText] = useState('');
    const formattedDate = value ? moment(value).format(DATE_FORMAT) : '';
    const [isDateTimePickerVisible, setIsDateTimePickerVisible] =
      useState(false);
    const inputValue =
      value && !isNaN(value?.getTime()) ? formattedDate : inputText;

    const onSelectDate = (date: Date) => {
      onChange(date);
      setIsDateTimePickerVisible(false);
    };

    const showDateTimePicker = () => {
      if (Platform.OS === 'android') {
        DateTimePickerAndroid.open({
          value: value || today,
          onChange: (event, date) => {
            if (event.type === 'set') {
              onChange(date);
            } else {
              DateTimePickerAndroid.dismiss('date');
            }
          },
        });
      } else {
        setIsDateTimePickerVisible(true);
      }
    };

    const handleDateChange = (text: string) => {
      const cleanedInput = text.replace(/\D/g, '');

      const limitedInput = cleanedInput.slice(0, 8);

      let formatted = limitedInput;
      if (limitedInput.length > 2) {
        formatted = `${limitedInput.slice(0, 2)}/${limitedInput.slice(2)}`;
      }
      if (limitedInput.length > 4) {
        formatted = `${limitedInput.slice(0, 2)}/${limitedInput.slice(2, 4)}/${limitedInput.slice(4)}`;
      }

      if (inputText.length > formatted.length) {
        onChange(undefined);
      } else if (formatted.length === 10) {
        const date = moment(formatted, DATE_FORMAT).toDate();

        onChange(date);
      }

      setInputText(formatted);
    };

    return (
      <>
        <InputContainer
          label={label}
          errorMessage={errorMessage}
          value={inputValue}
        >
          <TouchableOpacity onPress={showDateTimePicker}>
            <View style={styles.inputArea}>
              {prefix && <View style={styles.iconArea}>{prefix}</View>}
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.gray1}
                ref={ref}
                keyboardType="numeric"
                maxLength={10}
                style={styles.input}
                onChangeText={handleDateChange}
                value={inputValue}
                {...props}
              />
              <View style={styles.iconArea}>
                {suffix || (
                  <TouchableOpacity
                    style={styles.iconArea}
                    onPress={showDateTimePicker}
                  >
                    <SquarePen size={22} color={colors.gray1} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </InputContainer>
        <DateTimePickerModal
          isVisible={isDateTimePickerVisible}
          maximumDate={today}
          date={value || today}
          mode="date"
          display="inline"
          onConfirm={onSelectDate}
          onCancel={() => setIsDateTimePickerVisible(false)}
          themeVariant="dark"
          isDarkModeEnabled
          accentColor={colors.primary}
        />
      </>
    );
  },
);
