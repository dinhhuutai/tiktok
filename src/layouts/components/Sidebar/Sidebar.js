import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';

import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SugestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} iconActive={<UserGroupActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} iconActive={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label={'Suggested accounts'} footer={'See all'} />

            <SuggestedAccounts label={'Following accounts'} footer={'See more'} />
        </aside>;
}

export default Sidebar;