import className from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = className.bind(styles);

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            {/* HomeIcon is function. <HomeIcon /> is react element <=> React.CreateElement(HomeIcon) */}
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
            <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
        </Menu>

        <SuggestedAccounts label="Suggested accounts" />

        <SuggestedAccounts label="Following accounts" />
    </aside>;
}

export default Sidebar;