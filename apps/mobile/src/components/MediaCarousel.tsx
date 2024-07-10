import { FC, useCallback, useRef, useState } from 'react';
import { Animated, useWindowDimensions, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

import { UserPostMedia } from '@libs/instagram-api-sdk';

import { Clip } from './Clip';
import { PaginationDots } from './PaginationDots';
import FastImage from 'react-native-fast-image';

type Props = {
	data: UserPostMedia[];
	aspectRatio: number;
	isFocused: boolean;
};

export const MediaCarousel: FC<Props> = (props) => {
	const { data, aspectRatio, isFocused } = props;

	const animatedIndex = useRef(new Animated.Value(0)).current;

	const ref = useRef<ICarouselInstance>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const { width } = useWindowDimensions();
	const height = width * aspectRatio;

	const handleProgressChange = useCallback(
		(_: number, absoluteProgress: number) => {
			animatedIndex.setValue(absoluteProgress);
		},
		[animatedIndex],
	);

	return (
		<View style={{ height, width }}>
			<Carousel
				ref={ref}
				data={data}
				width={width}
				height={height}
				loop={false}
				panGestureHandlerProps={{ activeOffsetX: [-10, 10] }}
				onSnapToItem={setCurrentIndex}
				onProgressChange={handleProgressChange}
				renderItem={({ item, index }) => (
					<CarouselItem
						item={item}
						height={height}
						width={width}
						isFocused={isFocused && index === currentIndex}
					/>
				)}
			/>

			<PaginationDots noOfDots={data.length} scrollX={animatedIndex} />
		</View>
	);
};

const CarouselItem: FC<{
	item: UserPostMedia;
	height: number;
	width: number;
	isFocused: boolean;
}> = (props) => {
	const { item, height, width, isFocused } = props;

	return item.is_video ? (
		<Clip
			thumbnailUri={item.thumbnail_url}
			videoUri={item.video_url}
			aspectRatio={height / width}
			paused={!isFocused}
		/>
	) : (
		<FastImage
			source={{ uri: item.thumbnail_url }}
			style={{ width, height }}
			resizeMode={FastImage.resizeMode.cover}
		/>
	);
};
