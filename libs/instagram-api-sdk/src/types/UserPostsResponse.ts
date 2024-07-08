/**
 * The Typescript code was generated from JSON response of Instagram API.
 * FIXME: the type definitions are incomplete and need to be trim down.
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

export type PostItem = {
	code: string;
	like_count: number;
	thumbnail_url: string;

	// boost_unavailable_identifier: null | string;
	// boost_unavailable_reason: null | string;
	// can_reshare: boolean;
	// can_save: boolean;
	caption: {
		text: string;

		user: {
			// fbid_v2: number;
			// full_name: string;
			// id: string;
			// is_private: boolean;
			// is_verified: boolean;
			// profile_pic_id: string;
			// profile_pic_url: string;
			username: string;
		};

		// content_type: string;
		// created_at: number;
		// created_at_utc: number;
		// did_report_as_spam: boolean;
		// hashtags: string[];
		// id: string;
		// is_covered: boolean;
		// is_ranked_comment: boolean;
		// mentions: string[];
		// private_reply_status: number;
		// share_enabled: boolean;
		// type: number;
		// user_id: string;
	};
	// caption_is_edited: boolean;
	carousel_media_count: number;
	carousel_media: {
		// 	carousel_parent_id: string;
		// 	commerciality_status: string;
		// 	explore_pivot_grid: boolean;
		// 	fb_user_tags: {
		// 		in: any[];
		// 	};
		// 	featured_products: any[];
		// 	id: string;
		// 	image_versions: {
		// 		items: {
		// 			height: number;
		// 			url: string;
		// 			width: number;
		// 		}[];
		// 	};
		// 	is_video: boolean;
		// 	location: null | string;
		// 	media_name: string;
		// 	media_type: number;
		// 	original_height: number;
		// 	original_width: number;
		// 	product_suggestions: any[];
		// 	product_type: string;
		// 	sharing_friction_info: {
		// 		bloks_app_url: null | string;
		// 		sharing_friction_payload: null | string;
		// 		should_have_sharing_friction: boolean;
		// 	};
		// 	shop_routing_user_id: null | string;
		// 	sponsor_tags: any[];
		// 	tagged_users: any[];
		// 	taken_at: number;
		// 	taken_at_ts: number;
		// 	thumbnail_url?: string;
		// 	has_audio?: boolean;
		// 	scrubber_spritesheet_info_candidates?: {
		// 		default: {
		// 			file_size_kb: number;
		// 			max_thumbnails_per_sprite: number;
		// 			rendered_width: number;
		// 			sprite_height: number;
		// 			sprite_urls: string[];
		// 			sprite_width: number;
		// 			thumbnail_duration: number;
		// 			thumbnail_height: number;
		// 			thumbnail_width: number;
		// 			thumbnails_per_row: number;
		// 			total_thumbnail_num_per_sprite: number;
		// 			video_length: number;
		// 		};
		// 	};
		// 	is_dash_eligible?: number;
		// 	number_of_qualities?: number;
	}[];
};

export type UserPostsResponse = {
	data: {
		count: number;
		user: User;
		items: PostItem[];
	};
	pagination_token: string;
};

// const example = {
// 	boost_unavailable_identifier: null,
// 	boost_unavailable_reason: null,
// 	can_reshare: true,
// 	can_save: true,
// 	caption: {
// 		content_type: 'comment',
// 		created_at: 1715123731,
// 		created_at_utc: 1715123731,
// 		did_report_as_spam: false,
// 		hashtags: [],
// 		id: '3362814775367218923',
// 		is_covered: false,
// 		is_ranked_comment: false,
// 		mentions: [],
// 		private_reply_status: 0,
// 		share_enabled: false,
// 		text: 'It’s my 26th birthday, so I am giving away 26 Teslas to my followers! Like and Comment on this post tagging 2 friends to enter! Make sure you’re FOLLOWING so I can dm you if you win a Tesla! Winners will be announced in 7 days, share this to your story and help your friends win a Tesla lol\n\nTerms and conditions apply, see official rules: http://Bit.ly/beastgaway',
// 		type: 1,
// 		user: {
// 			fbid_v2: 17841402202464772,
// 			full_name: 'MrBeast',
// 			id: '2278169415',
// 			is_private: false,
// 			is_verified: true,
// 			profile_pic_id: '1765328607101572916',
// 			profile_pic_url:
// 				'https://scontent-sof1-1.cdninstagram.com/v/t51.2885-19/31077884_211593632905749_1394765701385814016_n.jpg?stp=dst-jpg_e0_s150x150&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=GCwLyxx3KUYQ7kNvgH_0PCz&edm=AJgCAUABAAAA&ccb=7-5&oh=00_AYDtb_DQM3hUKQQWoDrgICKY6Z6JkVZqhlxUDENGzIRLhA&oe=669112CF&_nc_sid=f93d1f',
// 			username: 'mrbeast',
// 		},
// 		user_id: '2278169415',
// 	},
// 	caption_is_edited: true,
// 	carousel_media: [
// 		{
// 			carousel_parent_id: '3362814775367218923_2278169415',
// 			commerciality_status: 'not_commercial',
// 			explore_pivot_grid: false,
// 			fb_user_tags: {
// 				in: [],
// 			},
// 			featured_products: [],
// 			id: '3362814769562254616',
// 			image_versions: {
// 				items: [
// 					{
// 						height: 1350,
// 						url: 'https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/441396569_964681935207210_2865470393726769220_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=TjMUzzVWCZwQ7kNvgG65-x6&edm=AJgCAUABAAAA&ccb=7-5&ig_cache_key=MzM2MjgxNDc2OTU2MjI1NDYxNg%3D%3D.2-ccb7-5&oh=00_AYBASCH_B56bBZqyMSSAH-zbUxITdjZ3lwc2YoLTzBslJg&oe=66911761&_nc_sid=f93d1f',
// 						width: 1080,
// 					},
// 					{
// 						height: 450,
// 						url: 'https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/441396569_964681935207210_2865470393726769220_n.jpg?stp=dst-jpg_e35_p360x360&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=TjMUzzVWCZwQ7kNvgG65-x6&edm=AJgCAUABAAAA&ccb=7-5&ig_cache_key=MzM2MjgxNDc2OTU2MjI1NDYxNg%3D%3D.2-ccb7-5&oh=00_AYBjWpIaV2hG2MaaS6UcqXz3uF5ryhY8PsB4X4-wb7cMBw&oe=66911761&_nc_sid=f93d1f',
// 						width: 360,
// 					},
// 				],
// 			},
// 			is_video: false,
// 			location: null,
// 			media_name: 'album_item',
// 			media_type: 1,
// 			original_height: 1800,
// 			original_width: 1440,
// 			product_suggestions: [],
// 			product_type: 'carousel_item',
// 			sharing_friction_info: {
// 				bloks_app_url: null,
// 				sharing_friction_payload: null,
// 				should_have_sharing_friction: false,
// 			},
// 			shop_routing_user_id: null,
// 			sponsor_tags: [],
// 			tagged_users: [],
// 			taken_at: 1715098781,
// 			taken_at_ts: 1715098781,
// 			thumbnail_url:
// 				'https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/441396569_964681935207210_2865470393726769220_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=TjMUzzVWCZwQ7kNvgG65-x6&edm=AJgCAUABAAAA&ccb=7-5&ig_cache_key=MzM2MjgxNDc2OTU2MjI1NDYxNg%3D%3D.2-ccb7-5&oh=00_AYBASCH_B56bBZqyMSSAH-zbUxITdjZ3lwc2YoLTzBslJg&oe=66911761&_nc_sid=f93d1f',
// 		},
// 		{
// 			carousel_parent_id: '3362814775367218923_2278169415',
// 			commerciality_status: 'not_commercial',
// 			explore_pivot_grid: false,
// 			fb_user_tags: {
// 				in: [],
// 			},
// 			featured_products: [],
// 			has_audio: true,
// 			id: '3362810425672621179',
// 			image_versions: {
// 				items: [
// 					{
// 						height: 450,
// 						url: 'https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/442302369_2807353516087406_5683651961269798965_n.jpg?stp=dst-jpg_e15_p360x360&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4OTAwLnNkci5mMjkzNTAifQ&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=YTMPaeM_UpkQ7kNvgG7JQjN&gid=b615c4cc710045109e97becb4dec4e73&edm=AJgCAUABAAAA&ccb=7-5&ig_cache_key=MzM2MjgxMDQyNTY3MjYyMTE3OQ%3D%3D.2-ccb7-5&oh=00_AYAyBiCJF4_oxtBdA695m4P9qiD3xge_VxlzQ_kAUt8Fww&oe=6691398D&_nc_sid=f93d1f',
// 						width: 360,
// 					},
// 				],
// 				scrubber_spritesheet_info_candidates: {
// 					default: {
// 						file_size_kb: 290,
// 						max_thumbnails_per_sprite: 105,
// 						rendered_width: 96,
// 						sprite_height: 882,
// 						sprite_urls: [
// 							'https://scontent-sof1-1.cdninstagram.com/v/t51.2885-15/442261365_1177748506728175_2916734119974606149_n.jpg?_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=9yQrEKiqLzoQ7kNvgE-K9Ej&edm=AJgCAUABAAAA&ccb=7-5&oh=00_AYCKf2tc5z3zRoz3cf7YnYEfOTF3KYSOQRlJO0R2m77hYA&oe=6691364F&_nc_sid=f93d1f',
// 						],
// 						sprite_width: 1500,
// 						thumbnail_duration: 0.158,
// 						thumbnail_height: 126,
// 						thumbnail_width: 100,
// 						thumbnails_per_row: 15,
// 						total_thumbnail_num_per_sprite: 105,
// 						video_length: 16.59,
// 					},
// 				},
// 			},
// 			is_dash_eligible: 1,
// 			is_video: true,
// 			location: null,
// 			media_name: 'album_item',
// 			media_type: 2,
// 			number_of_qualities: 7,
// 			original_height: 1350,
// 			original_width: 1080,
// 			product_suggestions: [],
// 			product_type: 'carousel_item',
// 			sharing_friction_info: {
// 				bloks_app_url: null,
// 				sharing_friction_payload: null,
// 				should_have_sharing_friction: false,
// 			},
// 			shop_routing_user_id: null,
// 			sponsor_tags: [],
// 			tagged_users: [],
// 			taken_at: 1715098781,
// 			taken_at_ts: 1715098781,
// 			thumbnail_url:
// 				'https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/442302369_2807353516087406_5683651961269798965_n.jpg?stp=dst-jpg_e15_p360x360&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4OTAwLnNkci5mMjkzNTAifQ&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=YTMPaeM_UpkQ7kNvgG7JQjN&gid=b615c4cc710045109e97becb4dec4e73&edm=AJgCAUABAAAA&ccb=7-5&ig_cache_key=MzM2MjgxMDQyNTY3MjYyMTE3OQ%3D%3D.2-ccb7-5&oh=00_AYAyBiCJF4_oxtBdA695m4P9qiD3xge_VxlzQ_kAUt8Fww&oe=6691398D&_nc_sid=f93d1f',
// 			video_codec: 'av01.0.04M.08.0.111.01.01.01.0',
// 			video_duration: 16.59,
// 			video_url:
// 				'https://scontent.cdninstagram.com/o1/v/t16/f2/m69/An-l2-SN-oPmBr6XblCe5LHPv5R0ssY6ZXSzAHqvBWvkLA4vny--IUu-JlZ31OPGyMKEYD_ccqKDhuP0GvdaC1sg.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0FST1VTRUxfSVRFTS5DMy4xMDgwLmRhc2hfaGlnaF8xMDgwcF92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&strext=1&vs=1a13fd802a4a34f0&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRWNBRGdOWEdQWml1ZmtNQUdqeS14bGo2Q28tYnBSMUFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBdXFVQnFlZWlqU29TSUJBTVpUSUVVZEZHdzBia1lMQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJsKBvKeYjMcBFQIoAkMzLBdAMJmZmZmZmhgSZGFzaF9oaWdoXzEwODBwX3YxEQB17gcA&ccb=9-4&oh=00_AYC1_GD4wGpmnoIkPGS-jndGla5ivO_owxh-7F_JfZ5p_g&oe=668D302E&_nc_sid=1d576d',
// 			video_versions: [
// 				{
// 					height: 1350,
// 					id: '754050713465072v',
// 					type: 101,
// 					url: 'https://scontent.cdninstagram.com/o1/v/t16/f2/m69/An-l2-SN-oPmBr6XblCe5LHPv5R0ssY6ZXSzAHqvBWvkLA4vny--IUu-JlZ31OPGyMKEYD_ccqKDhuP0GvdaC1sg.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0FST1VTRUxfSVRFTS5DMy4xMDgwLmRhc2hfaGlnaF8xMDgwcF92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&strext=1&vs=1a13fd802a4a34f0&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRWNBRGdOWEdQWml1ZmtNQUdqeS14bGo2Q28tYnBSMUFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBdXFVQnFlZWlqU29TSUJBTVpUSUVVZEZHdzBia1lMQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJsKBvKeYjMcBFQIoAkMzLBdAMJmZmZmZmhgSZGFzaF9oaWdoXzEwODBwX3YxEQB17gcA&ccb=9-4&oh=00_AYC1_GD4wGpmnoIkPGS-jndGla5ivO_owxh-7F_JfZ5p_g&oe=668D302E&_nc_sid=1d576d',
// 					width: 1080,
// 				},
// 				{
// 					height: 450,
// 					id: '2072763123104665v',
// 					type: 102,
// 					url: 'https://scontent.cdninstagram.com/o1/v/t16/f2/m69/An8h2uDkjz439SCsfntpU3K1NX-pxdkStv8fNjwESRuxcUohC4wmHofGbHfx9DSnvHKB0Fllmmq08d0QUutkuPA.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0FST1VTRUxfSVRFTS5DMy4zNjAuZGFzaF9iYXNlbGluZV8yX3YxIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&strext=1&vs=237b50c41042e385&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSG5STWhwZUIwU2p3bVFGQUs4ekJ0bnRzUTA1YmtZTEFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBdXFVQnFlZWlqU29TSUJBTVpUSUVVZEZHdzBia1lMQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJsKBvKeYjMcBFQIoAkMzLBdAMJ987ZFocxgSZGFzaF9iYXNlbGluZV8yX3YxEQB17gcA&ccb=9-4&oh=00_AYCTXYr9IZdY3_uFeQ3BtngskVz58gSwPJ1SpvEdaXMn6g&oe=668D2ADA&_nc_sid=1d576d',
// 					width: 360,
// 				},
// 				{
// 					height: 450,
// 					id: '2072763123104665v',
// 					type: 103,
// 					url: 'https://scontent.cdninstagram.com/o1/v/t16/f2/m69/An8h2uDkjz439SCsfntpU3K1NX-pxdkStv8fNjwESRuxcUohC4wmHofGbHfx9DSnvHKB0Fllmmq08d0QUutkuPA.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0FST1VTRUxfSVRFTS5DMy4zNjAuZGFzaF9iYXNlbGluZV8yX3YxIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&strext=1&vs=237b50c41042e385&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSG5STWhwZUIwU2p3bVFGQUs4ekJ0bnRzUTA1YmtZTEFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBdXFVQnFlZWlqU29TSUJBTVpUSUVVZEZHdzBia1lMQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJsKBvKeYjMcBFQIoAkMzLBdAMJ987ZFocxgSZGFzaF9iYXNlbGluZV8yX3YxEQB17gcA&ccb=9-4&oh=00_AYCTXYr9IZdY3_uFeQ3BtngskVz58gSwPJ1SpvEdaXMn6g&oe=668D2ADA&_nc_sid=1d576d',
// 					width: 360,
// 				},
// 			],
// 		},
// 		{
// 			carousel_parent_id: '3362814775367218923_2278169415',
// 			commerciality_status: 'not_commercial',
// 			explore_pivot_grid: false,
// 			fb_user_tags: {
// 				in: [],
// 			},
// 			featured_products: [],
// 			id: '3362814769562334571',
// 			image_versions: {
// 				items: [
// 					{
// 						height: 1350,
// 						url: 'https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/442440168_739693101657090_1305407720237094163_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=4mCjOQk8F_4Q7kNvgGJJTo-&edm=AJgCAUABAAAA&ccb=7-5&ig_cache_key=MzM2MjgxNDc2OTU2MjMzNDU3MQ%3D%3D.2-ccb7-5&oh=00_AYBP8AB__QD_FUKitlrns0QwBDxyxlf-wOf-6uIlDWLpnw&oe=6691293E&_nc_sid=f93d1f',
// 						width: 1080,
// 					},
// 					{
// 						height: 450,
// 						url: 'https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/442440168_739693101657090_1305407720237094163_n.jpg?stp=dst-jpg_e35_p360x360&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=4mCjOQk8F_4Q7kNvgGJJTo-&gid=b615c4cc710045109e97becb4dec4e73&edm=AJgCAUABAAAA&ccb=7-5&ig_cache_key=MzM2MjgxNDc2OTU2MjMzNDU3MQ%3D%3D.2-ccb7-5&oh=00_AYCSvlBCHsdrtJXeoS5Iyko5he_OXScZzPVCL6Z4TUztPg&oe=6691293E&_nc_sid=f93d1f',
// 						width: 360,
// 					},
// 				],
// 			},
// 			is_video: false,
// 			location: null,
// 			media_name: 'album_item',
// 			media_type: 1,
// 			original_height: 1800,
// 			original_width: 1440,
// 			product_suggestions: [],
// 			product_type: 'carousel_item',
// 			sharing_friction_info: {
// 				bloks_app_url: null,
// 				sharing_friction_payload: null,
// 				should_have_sharing_friction: false,
// 			},
// 			shop_routing_user_id: null,
// 			sponsor_tags: [],
// 			tagged_users: [],
// 			taken_at: 1715098781,
// 			taken_at_ts: 1715098781,
// 			thumbnail_url:
// 				'https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/442440168_739693101657090_1305407720237094163_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=4mCjOQk8F_4Q7kNvgGJJTo-&edm=AJgCAUABAAAA&ccb=7-5&ig_cache_key=MzM2MjgxNDc2OTU2MjMzNDU3MQ%3D%3D.2-ccb7-5&oh=00_AYBP8AB__QD_FUKitlrns0QwBDxyxlf-wOf-6uIlDWLpnw&oe=6691293E&_nc_sid=f93d1f',
// 		},
// 	],
// 	carousel_media_count: 3,
// 	carousel_media_ids: [3362814769562255000, 3362810425672621000, 3362814769562334700],
// 	carousel_media_pending_post_count: 0,
// 	clips_tab_pinned_user_ids: [],
// 	coauthor_producers: [],
// 	code: 'C6rHjijMrbr',
// 	comment_count: 10153206,
// 	comment_inform_treatment: {
// 		action_type: null,
// 		should_have_inform_treatment: false,
// 		text: '',
// 		url: null,
// 	},
// 	comment_threading_enabled: true,
// 	commerciality_status: 'not_commercial',
// 	deleted_reason: 0,
// 	device_timestamp: 1715098263433817,
// 	fb_aggregated_comment_count: 0,
// 	fb_aggregated_like_count: 0,
// 	fb_user_tags: {
// 		in: [],
// 	},
// 	fbid: '17860864038141508',
// 	featured_products: [],
// 	filter_type: 0,
// 	fundraiser_tag: {
// 		has_standalone_fundraiser: false,
// 	},
// 	has_liked: false,
// 	has_more_comments: true,
// 	has_privately_liked: false,
// 	has_shared_to_fb: 0,
// 	id: '3362814775367218923',
// 	ig_media_sharing_disabled: false,
// 	igbio_product: null,
// 	image_versions: {
// 		items: [
// 			{
// 				height: 1350,
// 				url: 'https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/441396569_964681935207210_2865470393726769220_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=TjMUzzVWCZwQ7kNvgG65-x6&edm=AJgCAUABAAAA&ccb=7-5&ig_cache_key=MzM2MjgxNDc2OTU2MjI1NDYxNg%3D%3D.2-ccb7-5&oh=00_AYBASCH_B56bBZqyMSSAH-zbUxITdjZ3lwc2YoLTzBslJg&oe=66911761&_nc_sid=f93d1f',
// 				width: 1080,
// 			},
// 			{
// 				height: 400,
// 				url: 'https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/441396569_964681935207210_2865470393726769220_n.jpg?stp=dst-jpg_e35_p320x320&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=TjMUzzVWCZwQ7kNvgG65-x6&edm=AJgCAUABAAAA&ccb=7-5&ig_cache_key=MzM2MjgxNDc2OTU2MjI1NDYxNg%3D%3D.2-ccb7-5&oh=00_AYC3XFvTxx-8RGeTVRWKQjqPxtIRypOGrrhuU9yfUbEsXg&oe=66911761&_nc_sid=f93d1f',
// 				width: 320,
// 			},
// 		],
// 	},
// 	inline_composer_display_condition: 'impression_trigger',
// 	inline_composer_imp_trigger_time: 5,
// 	integrity_review_decision: 'pending',
// 	invited_coauthor_producers: [],
// 	is_auto_created: false,
// 	is_comments_gif_composer_enabled: true,
// 	is_cutout_sticker_allowed: false,
// 	is_eligible_for_media_note_recs_nux: false,
// 	is_in_profile_grid: false,
// 	is_open_to_public_submission: false,
// 	is_organic_product_tagging_eligible: true,
// 	is_paid_partnership: false,
// 	is_pinned: true,
// 	is_post_live_clips_media: false,
// 	is_quiet_post: false,
// 	is_reshare_of_text_post_app_media_in_ig: false,
// 	is_reuse_allowed: false,
// 	is_social_ufi_eligible: true,
// 	is_tagged_media_shared_to_viewer_profile_grid: false,
// 	is_unified_video: false,
// 	is_video: false,
// 	like_and_view_counts_disabled: false,
// 	like_count: 14463949,
// 	location: null,
// 	max_num_visible_preview_comments: 2,
// 	media_name: 'album',
// 	media_type: 8,
// 	mezql_token: '',
// 	music_metadata: {
// 		audio_canonical_id: '0',
// 		audio_type: null,
// 		music_info: null,
// 		original_sound_info: null,
// 		pinned_media_ids: null,
// 	},
// 	open_carousel_submission_state: 'closed',
// 	original_height: 612,
// 	original_width: 612,
// 	owner: {
// 		account_badges: [],
// 		can_see_quiet_post_attribution: true,
// 		fan_club_info: {
// 			autosave_to_exclusive_highlight: null,
// 			connected_member_count: null,
// 			fan_club_id: null,
// 			fan_club_name: null,
// 			fan_consideration_page_revamp_eligiblity: null,
// 			has_enough_subscribers_for_ssc: null,
// 			is_fan_club_gifting_eligible: null,
// 			is_fan_club_referral_eligible: null,
// 			subscriber_count: null,
// 		},
// 		fbid_v2: 17841402202464772,
// 		feed_post_reshare_disabled: false,
// 		full_name: 'MrBeast',
// 		has_anonymous_profile_picture: false,
// 		id: '2278169415',
// 		is_favorite: false,
// 		is_private: false,
// 		is_unpublished: false,
// 		is_verified: true,
// 		profile_pic_id: '1765328607101572916',
// 		profile_pic_url:
// 			'https://scontent-sof1-1.cdninstagram.com/v/t51.2885-19/31077884_211593632905749_1394765701385814016_n.jpg?stp=dst-jpg_e0_s150x150&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=GCwLyxx3KUYQ7kNvgH_0PCz&edm=AJgCAUABAAAA&ccb=7-5&oh=00_AYDtb_DQM3hUKQQWoDrgICKY6Z6JkVZqhlxUDENGzIRLhA&oe=669112CF&_nc_sid=f93d1f',
// 		show_account_transparency_details: true,
// 		third_party_downloads_enabled: 1,
// 		transparency_product_enabled: false,
// 		username: 'mrbeast',
// 	},
// 	preview_comments: [],
// 	product_suggestions: [],
// 	product_type: 'carousel_container',
// 	share_count_disabled: false,
// 	sharing_friction_info: {
// 		bloks_app_url: null,
// 		sharing_friction_payload: null,
// 		should_have_sharing_friction: false,
// 	},
// 	shop_routing_user_id: null,
// 	should_show_author_pog_for_tagged_media_shared_to_profile_grid: false,
// 	social_context: [],
// 	sponsor_tags: [],
// 	subscribe_cta_visible: false,
// 	tagged_users: [],
// 	taken_at: 1715098782,
// 	taken_at_ts: 1715098782,
// 	thumbnail_url:
// 		'https://scontent-sof1-1.cdninstagram.com/v/t51.29350-15/441396569_964681935207210_2865470393726769220_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=TjMUzzVWCZwQ7kNvgG65-x6&edm=AJgCAUABAAAA&ccb=7-5&ig_cache_key=MzM2MjgxNDc2OTU2MjI1NDYxNg%3D%3D.2-ccb7-5&oh=00_AYBASCH_B56bBZqyMSSAH-zbUxITdjZ3lwc2YoLTzBslJg&oe=66911761&_nc_sid=f93d1f',
// 	timeline_pinned_user_ids: [2278169415],
// 	top_likers: [],
// 	user: {
// 		account_badges: [],
// 		eligible_for_text_app_activation_badge: false,
// 		fan_club_info: {
// 			autosave_to_exclusive_highlight: null,
// 			connected_member_count: null,
// 			fan_club_id: null,
// 			fan_club_name: null,
// 			fan_consideration_page_revamp_eligiblity: null,
// 			has_enough_subscribers_for_ssc: null,
// 			is_fan_club_gifting_eligible: null,
// 			is_fan_club_referral_eligible: null,
// 			subscriber_count: null,
// 		},
// 		fbid_v2: 17841402202464772,
// 		feed_post_reshare_disabled: false,
// 		full_name: 'MrBeast',
// 		has_anonymous_profile_picture: false,
// 		id: '2278169415',
// 		is_favorite: false,
// 		is_private: false,
// 		is_unpublished: false,
// 		is_verified: true,
// 		profile_pic_id: '1765328607101572916',
// 		profile_pic_url:
// 			'https://scontent-sof1-1.cdninstagram.com/v/t51.2885-19/31077884_211593632905749_1394765701385814016_n.jpg?stp=dst-jpg_e0_s150x150&_nc_ht=scontent-sof1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=GCwLyxx3KUYQ7kNvgH_0PCz&edm=AJgCAUABAAAA&ccb=7-5&oh=00_AYDtb_DQM3hUKQQWoDrgICKY6Z6JkVZqhlxUDENGzIRLhA&oe=669112CF&_nc_sid=f93d1f',
// 		show_account_transparency_details: true,
// 		third_party_downloads_enabled: 1,
// 		transparency_product_enabled: false,
// 		username: 'mrbeast',
// 	},
// };
