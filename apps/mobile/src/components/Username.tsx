import { FC } from 'react';

import VerifiedIcon from '@mobile/assets/icons/verified.svg';
import { Text } from '@mobile/components/Text';
import { colors } from '@mobile/themes/colors';

type Props = {
	username: string;
	verified: boolean;
};

export const Username: FC<Props> = (props) => {
	const { username, verified } = props;

	return (
		<Text weight={'bold'}>
			{username}
			{!!verified && (
				<>
					{' '}
					<VerifiedIcon height={12} width={12} color={colors.verifiedBlue} />
				</>
			)}
		</Text>
	);
};
