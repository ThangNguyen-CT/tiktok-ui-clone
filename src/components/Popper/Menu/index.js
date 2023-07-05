import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { PopperWrapper } from '..';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Menu({ children, Items = [], onChange = () => {} }) {
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

    return (
        <Tippy
            interactive
            delay={[0, 800]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={'Language'}
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1),
                                    );
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHidden={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;