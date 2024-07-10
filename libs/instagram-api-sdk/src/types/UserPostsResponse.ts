/**
 * The Typescript code was generated from JSON response of Instagram API.
 */

type User = {
	id: string;
	username: string;
	full_name: string;
	is_private: boolean;
	is_verified: boolean;
	profile_pic_id: string;
	profile_pic_url: string;
};

export type UserPostMedia = {
	thumbnail_url?: string;
	original_height: number;
	original_width: number;
} & (
	| {
			is_video: false;
	  }
	| {
			is_video: true;
			video_url: string;
			video_versions: {
				height: number;
				width: number;
				url: string;
			}[];
	  }
);

export type UserPost = {
	code: string;
	like_count: number;
	thumbnail_url: string;

	original_height: number;
	original_width: number;

	caption: {
		text: string;
		user: {
			profile_pic_url: string;
			username: string;
			is_verified: boolean;
		};
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
			video_versions: {
				height: number;
				width: number;
				url: string;
			}[];
	  }
);

export type UserPostsResponse = {
	data: {
		count: number;
		user: User;
		items: UserPost[];
	};
	pagination_token: string;
};
