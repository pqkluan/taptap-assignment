import { queryKeys } from './query-key-factory';

describe('query-key-factory', () => {
	it('should work as expected', () => {
		expect(queryKeys.all).toEqual(['instagram']);
		expect(queryKeys.postInfo('mock-code')).toEqual(['instagram', 'post', 'mock-code']);
		expect(queryKeys.search('keyword')).toEqual(['instagram', 'search', 'keyword']);
		expect(queryKeys.userPosts('mrbeast')).toEqual(['instagram', 'user-posts', 'mrbeast']);
	});
});
