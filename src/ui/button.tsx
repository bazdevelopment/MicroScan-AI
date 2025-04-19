/* eslint-disable max-lines-per-function */
import React, { type ReactElement } from 'react';
import type { PressableProps } from 'react-native';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import GradientText from '@/components/gradient-text';

import colors from './colors';

const button = tv({
  slots: {
    container: 'my-2 flex flex-row items-center justify-center rounded-md px-4',
    label: 'font-semibold-nunito text-base',
    indicator: 'h-6 text-white',
  },

  variants: {
    variant: {
      default: {
        container: 'bg-black dark:bg-white',
        label: 'text-white dark:text-black',
        indicator: 'text-white dark:text-black',
      },
      secondary: {
        container: 'bg-primary-900',
        label: 'text-secondary-600',
        indicator: 'text-white',
      },
      outline: {
        container: 'border border-neutral-400',
        label: 'text-black dark:text-neutral-100',
        indicator: 'text-black dark:text-neutral-100',
      },
      destructive: {
        container:
          'rounded-xl border-2 border-red-100 bg-red-500 dark:border-0 dark:bg-red-600',
        label: 'text-white',
        indicator: 'text-white',
      },
      ghost: {
        container: 'bg-transparent',
        label: 'text-black underline dark:text-white',
        indicator: 'text-black dark:text-white',
      },
      link: {
        container: 'bg-transparent',
        label: 'text-black active:opacity-80',
        indicator: 'text-black',
      },
    },
    size: {
      default: {
        container: 'h-10 px-4',
        label: 'text-base',
      },
      lg: {
        container: 'h-14 px-8',
        label: 'text-xl',
      },
      sm: {
        container: 'h-8 px-3',
        label: 'text-sm',
        indicator: 'h-2',
      },
      icon: { container: 'h-9 w-9' },
    },
    disabled: {
      true: {
        container: 'disabled:border-neutral-200 disabled:bg-primary-600 ',
        label: 'text-neutral-600 dark:text-neutral-600',
        indicator: 'text-neutral-400 dark:text-neutral-400',
      },
    },
    fullWidth: {
      true: {
        container: '',
      },
      false: {
        container: 'self-center',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    disabled: false,
    fullWidth: true,
    size: 'default',
  },
});

type ButtonVariants = VariantProps<typeof button>;
interface Props extends ButtonVariants, Omit<PressableProps, 'disabled'> {
  label?: string;
  loading?: boolean;
  className?: string;
  textClassName?: string;
  icon?: ReactElement;
  iconPosition?: 'left' | 'right';
  withGradientText?: boolean;
}

export const Button = React.forwardRef<View, Props>(
  (
    {
      label: text,
      loading = false,
      variant = 'default',
      disabled = false,
      size = 'default',
      className = '',
      icon,
      testID,
      textClassName = '',
      withGradientText = false,
      iconPosition = 'right',
      ...props
    },
    ref,
  ) => {
    const styles = React.useMemo(
      () => button({ variant, disabled, size }),
      [variant, disabled, size],
    );

    return (
      <Pressable
        disabled={disabled || loading}
        className={styles.container({ className })}
        {...props}
        ref={ref}
        testID={testID}
      >
        {props.children ? (
          props.children
        ) : (
          <>
            {!!icon && iconPosition == 'left' && <View>{icon}</View>}
            {loading ? (
              <ActivityIndicator
                size="small"
                className={styles.indicator()}
                testID={testID ? `${testID}-activity-indicator` : undefined}
              />
            ) : (
              <>
                {withGradientText ? (
                  <GradientText
                    colors={[colors.lightSkyBlue, colors.primaryPurple]}
                  >
                    <Text
                      testID={testID ? `${testID}-label` : undefined}
                      className={styles.label({ className: textClassName })}
                    >
                      {text}
                    </Text>
                  </GradientText>
                ) : (
                  <Text
                    testID={testID ? `${testID}-label` : undefined}
                    className={styles.label({ className: textClassName })}
                  >
                    {text}
                  </Text>
                )}

                {!!icon && iconPosition === 'right' && (
                  <View className="ml-2">{icon}</View>
                )}
              </>
            )}
          </>
        )}
      </Pressable>
    );
  },
);

interface IRoundedButton {
  icon: ReactElement;
  label: string;
  onPress: () => void;
  className?: string;
  textClassName?: string;
}
export const RoundedButton = ({
  icon,
  label,
  onPress,
  className,
  textClassName,
}: IRoundedButton) => {
  return (
    <TouchableOpacity
      className={`h-[100px] w-[120px] items-center justify-center gap-3 rounded-2xl bg-primary-100 dark:bg-black ${className}`}
      onPress={onPress}
    >
      {icon}
      <Text className={`text-center font-semibold-nunito ${textClassName}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
