import { forwardRef } from 'react';
import {
	StyleProp,
	TextInput,
	TextInputProps,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import SearchIcon from '@mobile/assets/icons/search.svg';
import { colors } from '@mobile/themes/colors';
import { Text } from '@mobile/components/Text';

interface Props extends TextInputProps {
	containerStyle?: StyleProp<ViewStyle>;
	cancellable?: boolean;
	onCancel?: () => void;
}

export const SearchBar = forwardRef<TextInput, Props>((props, ref) => {
	const {
		containerStyle,
		style: textInputStyle,
		value,
		cancellable = false,
		onChangeText,
		onCancel,
		...inputProps
	} = props;

	const { styles, theme } = useStyles(stylesheet);

	return (
		<View style={[styles.container, containerStyle]}>
			<View style={styles.inputBorder}>
				<SearchIcon width={12} height={12} color={theme.colors.border} />

				<TextInput
					ref={ref}
					style={[styles.textInput, textInputStyle]}
					allowFontScaling={false}
					autoCapitalize={'none'}
					autoComplete={'off'}
					autoCorrect={false}
					blurOnSubmit
					clearTextOnFocus={false}
					contextMenuHidden
					cursorColor={theme.colors.typography}
					dataDetectorTypes={'none'}
					disableFullscreenUI
					enablesReturnKeyAutomatically
					enterKeyHint={'search'}
					importantForAutofill={'no'}
					inputMode={'search'}
					keyboardType={'web-search'}
					maxLength={50}
					multiline={false}
					numberOfLines={1}
					onChangeText={onChangeText}
					placeholder={'Search'}
					placeholderTextColor={theme.colors.border}
					rejectResponderTermination={false}
					returnKeyType={'search'}
					scrollEnabled={false}
					selectTextOnFocus
					showSoftInputOnFocus
					textContentType={'none'}
					underlineColorAndroid={colors.transparent}
					value={value}
					{...inputProps}
				/>
			</View>

			{!!cancellable && (
				<TouchableOpacity style={styles.cancelButton} hitSlop={12} onPress={onCancel}>
					<Text size={14} weight={'bold'}>
						{'Cancel'}
					</Text>
				</TouchableOpacity>
			)}
		</View>
	);
});

const stylesheet = createStyleSheet((theme) => ({
	container: {
		flexDirection: 'row',
		alignItems: 'center',

		marginLeft: theme.margins.xl,
		marginRight: theme.margins.md,
	},
	inputBorder: {
		marginRight: theme.margins.md,

		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',

		minHeight: 30,
		paddingVertical: 4,
		paddingHorizontal: theme.margins.lg,

		borderWidth: 1,
		borderColor: theme.colors.border,
		borderRadius: 6,

		fontFamily: theme.fontFamily,
		fontSize: 14,
	},
	textInput: {
		flex: 1,

		padding: 0,
		margin: 0,

		// Spacing to search icon
		marginLeft: theme.margins.md,

		color: theme.colors.typography,
	},
	cancelButton: {
		paddingHorizontal: theme.margins.md,
	},
}));
