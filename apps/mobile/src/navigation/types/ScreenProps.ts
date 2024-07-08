import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from './RootStackParamList';

/**
 *  Possible route for of root navigation stack
 */
type RootRoute = keyof RootStackParamList;
type RootScreen<T extends RootRoute> = NativeStackScreenProps<RootStackParamList, T>;

type RouteName = RootRoute;

/**
 *	Screen type for navigation
 */
export type ScreenProps<T extends RouteName> = RootScreen<T>;
