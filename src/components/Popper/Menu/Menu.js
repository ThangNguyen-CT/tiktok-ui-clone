import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { PopperWrapper } from '..';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Menu({
    children,
    Items = [],
    hideOnClick = false,
    onChange = () => {},
}) {
    const [history, setHistory] = useState([{ data: Items }]);
    const currentHistory = history[history.length - 1];

    const renderItems = () => {
        return currentHistory.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };
    const handleResetToFisrtPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 800]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={currentHistory.title}
                                onBack={handleReset}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHidden={handleResetToFisrtPage}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    Items: PropTypes.array,
    onChange: PropTypes.func,
};
export default Menu;
