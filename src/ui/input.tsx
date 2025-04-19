import React from 'react';
// only used with react-hook-form
import { forwardRef } from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from 'react-hook-form';
import type { TextInputProps } from 'react-native';
import { I18nManager, StyleSheet, View } from 'react-native';
import { TextInput as NTextInput } from 'react-native';
import { type TextInput } from 'react-native';
import { tv } from 'tailwind-variants';

import Icon from '@/components/icon';

import colors from './colors';
import { Text } from './text';

const inputTv = tv({
  slots: {
    container: 'mb-2',
    label:
      'mb-2 font-semibold-nunito text-sm text-charcoal-900 dark:text-neutral-100',
    input:
      'relative flex flex-row items-center rounded-2xl border-[3px] border-primary-300 bg-white dark:border-primary-900 dark:bg-charcoal-800 ',
  },

  variants: {
    focused: {
      true: {
        input: 'border-primary-500 dark:border-primary-900',
      },
    },
    error: {
      true: {
        input: 'border-danger-600',
        label: 'text-danger-600 dark:text-danger-600',
      },
    },
    disabled: {
      true: {
        input: 'bg-neutral-200',
      },
    },
  },
  defaultVariants: {
    focused: false,
    error: false,
    disabled: false,
  },
});

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
  icon?: React.ReactElement;
  textClassName?: string;
  containerClassName?: string;
}

type TRule<T extends FieldValues> =
  | Omit<
      RegisterOptions<T>,
      'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
    >
  | undefined;

export type RuleType<T extends FieldValues> = { [name in keyof T]: TRule<T> };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RuleType<T>;
};

interface ControlledInputProps<T extends FieldValues>
  extends NInputProps,
    InputControllerType<T> {}

export const Input = React.forwardRef<NTextInput, NInputProps>((props, ref) => {
  const {
    label,
    error,
    testID,
    icon,
    textClassName,
    containerClassName,
    ...inputProps
  } = props;
  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  const styles = React.useMemo(
    () =>
      inputTv({
        error: Boolean(error),
        focused: isFocussed,
        disabled: Boolean(props.disabled),
      }),
    [error, isFocussed, props.disabled],
  );

  return (
    <View className={styles.container()}>
      {label && (
        <Text
          testID={testID ? `${testID}-label` : undefined}
          className={styles.label()}
        >
          {label}
        </Text>
      )}
      <View className={`${styles.input()} ${containerClassName}`}>
        {!!icon && (
          <Icon icon={icon} containerStyle="ml-4" color={colors.primary[900]} />
        )}
        <NTextInput
          testID={testID}
          ref={ref}
          placeholderTextColor={colors.charcoal[400]}
          onBlur={onBlur}
          onFocus={onFocus}
          {...inputProps}
          style={StyleSheet.flatten([
            { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
            { textAlign: I18nManager.isRTL ? 'right' : 'left' },
            inputProps.style,
          ])}
        />
      </View>
      {error && (
        <Text
          testID={testID ? `${testID}-error` : undefined}
          className={`text-sm text-danger-400 dark:text-danger-600 ${textClassName}`}
        >
          {error}
        </Text>
      )}
    </View>
  );
});

export const ControlledInput = forwardRef<
  TextInput,
  ControlledInputProps<FieldValues>
>(
  (
    { name, control, rules, error, value, onChangeText, ...inputProps },
    ref,
  ) => {
    // const { field, fieldState } = useController({ control, name, rules });

    return (
      <Input
        ref={ref}
        autoCapitalize="none"
        onChangeText={onChangeText}
        value={(value as string) || ''}
        {...inputProps}
        error={error}
      />
    );
  },
);
