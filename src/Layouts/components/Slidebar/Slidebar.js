import classNames from 'classnames/bind';
import Styles from './slidebar.module.scss';
import Menu from './Menu/Menu';
import SuggestedAccounts from '~/components/SuggestedAccount/SuggestedAccounts';
import { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
} from '~/components/Icons';
import config from '~/configs';

const cx = classNames.bind(Styles);
function Slider() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('content')}>
                <Menu>
                    <MenuItem
                        to={config.routes.home}
                        title="For you"
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    ></MenuItem>
                    <MenuItem
                        to={config.routes.following}
                        title="Following"
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    ></MenuItem>
                    <MenuItem
                        to={config.routes.live}
                        title="Live"
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    ></MenuItem>
                </Menu>
            </div>
            <SuggestedAccounts label="Suggested Account" />
            <SuggestedAccounts label="Following Account" />
        </aside>
    );
}

export default Slider;
