export type SearchItem = {
	username: string;
	full_name: string;
	is_verified: boolean;
	profile_pic_url: string;
};

export type SearchResponse = {
	data: {
		count: number;
		items: SearchItem[];
	};
};
