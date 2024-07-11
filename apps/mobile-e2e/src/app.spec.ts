import { element, by, expect } from 'detox';

describe('Mobile', () => {
	it('renders Feeds screen', async () => {
		await expect(element(by.id('feeds-screen'))).toExist();
		await expect(element(by.id('search-button'))).toBeVisible();
		await expect(element(by.id('post-list'))).toBeVisible();
	});

	it('tap on search button should open search screen', async () => {
		await element(by.id('search-button')).tap();

		await expect(element(by.id('search-screen'))).toExist();
	});

	it('type in search input should display search result', async () => {
		await expect(element(by.id('search-input'))).toBeVisible();

		// Use replace instead of typeText to reduce the number of keystrokes
		await element(by.id('search-input')).replaceText('insta');

		// The result should display Instagram name
		await expect(element(by.text('Instagram'))).toBeVisible();
	});

	it("tap on search result should open that result's feeds", async () => {
		await element(by.text('Instagram')).tap();

		// Make sure the correct screen is displayed
		await expect(element(by.id('feeds-screen'))).toExist();

		// Check if the user avatar is displayed on the post
		await expect(element(by.id('user-avatar'))).toExist();
	});

	it('tap on the post should open the detail screen', async () => {
		await element(by.id('user-avatar')).tap();

		// Make sure the correct screen is displayed
		await expect(element(by.id('post-info-screen'))).toExist();

		// Check the avatar again on the detail screen
		await expect(element(by.id('user-avatar'))).toExist();
	});
});
