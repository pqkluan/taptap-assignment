import { colors } from '@mobile/themes/colors';
import { FC, useState } from 'react';
import { ActivityIndicator, Platform, StyleSheet, useWindowDimensions, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Video, { BufferConfig, OnVideoErrorData } from 'react-native-video';

type Props = {
	thumbnailUri: string;
	videoUri: string;
	aspectRatio: number;
	paused: boolean;
};

export const Clip: FC<Props> = (props) => {
	const { thumbnailUri, videoUri, aspectRatio, paused } = props;

	const { width } = useWindowDimensions();
	const height = width * aspectRatio;

	const [loaded, setLoaded] = useState(false);

	return (
		<View style={{ height, width }}>
			<Video
				poster={thumbnailUri}
				source={{ uri: videoUri }}
				resizeMode={'contain'}
				onError={handleError}
				style={{ height, width }}
				paused={paused}
				onLoad={() => setLoaded(true)}
				repeat={repeat}
				bufferConfig={bufferConfig}
			/>

			{!loaded && <LoadingOverlay />}
		</View>
	);
};

const handleError = (err: OnVideoErrorData) => console.error(err);

// Workaround for Android keep crashing due to out of memory issue
// More info: https://github.com/TheWidlarzGroup/react-native-video/issues/2767
const repeat = Platform.select({ android: false, default: true });
const bufferConfig: BufferConfig = {
	minBufferMs: 2500,
	maxBufferMs: 5000,
	bufferForPlaybackMs: 2500,
	bufferForPlaybackAfterRebufferMs: 2500,
};

const LoadingOverlay: FC = () => {
	const { styles } = useStyles(stylesheet);

	return (
		<View style={styles.loadingContainer}>
			<ActivityIndicator size={'large'} color={colors.white} />
		</View>
	);
};

const stylesheet = createStyleSheet((theme) => ({
	loadingContainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		alignItems: 'center',
	},
}));
