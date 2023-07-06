import classNames from 'classnames/bind';
import Styles from './menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(Styles);
function MenuItem({ title, to, icon, activeIcon }) {
    const renderMenu = (activeItem = false) => (
        <>
            {activeItem ? activeIcon : icon}
            <span className={cx('title')}>{title}</span>
        </>
    );
    return (
        <NavLink
            to={to}
            className={(nav) => cx('menu-item', { active: nav.isActive })}
        >
            {({ isActive }) => renderMenu(isActive)}
        </NavLink>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node,
};
export default MenuItem;
