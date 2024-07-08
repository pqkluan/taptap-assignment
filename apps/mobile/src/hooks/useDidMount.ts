import { EffectCallback, useEffect } from 'react';

/**
 * Wrapper for useEffect that only runs on mount.
 * Because adding eslint-disable-next-line every where is not a good practice.
 *
 * @param callback
 */
export const useDidMount = (callback: EffectCallback): void => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(callback, []);
};
