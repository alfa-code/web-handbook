import { getStyleWrapper } from 'Components/style-wrappers/getStyleWrapper';

import styles from './profile.module.scss';

const getProfileStyleWrapper = function(name) {
    return getStyleWrapper(styles, name);
};

export const ProfileForm = getProfileStyleWrapper('ProfileForm');
export const FormBody = getProfileStyleWrapper('FormBody');
export const SubmitBlock = getProfileStyleWrapper('SubmitBlock');
