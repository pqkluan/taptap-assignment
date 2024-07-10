import { UserPostMedia } from './UserPostsResponse';

export type PostInfo = {
	code: string;
	thumbnail_url: string;

	original_height: number;
	original_width: number;

	user: {
		profile_pic_url: string;
		username: string;
		full_name: string;
		is_verified: boolean;
	};

	caption: { text: string };

	metrics: {
		like_count: number;
	};
} & (
	| {
			product_type: 'carousel_container';
			carousel_media: UserPostMedia[];
			carousel_media_count: number;
	  }
	| {
			product_type: 'clips';
			video_url: string;
	  }
);

export type PostInfoResponse = {
	data: PostInfo;
};
