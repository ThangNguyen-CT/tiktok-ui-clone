import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignIn,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Buttons';

import Menu from '~/components/Popper/Menu';
import images from '~/assets/images';
import styles from './header.module.scss';

import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image/Image';
import Search from '~/components/Searchs/Search';

const cx = classNames.bind(styles);
const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Vietnamese',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback anh help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

function Header() {
    //Handle logic
    const handleMenuChange = (menuitem) => {
        switch (menuitem.type) {
            case 'Language':
                console.log('ok');
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coins ',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                {/* Search */}
                <Search />
                {/* End search */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={(0, 700)}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={cx('actions-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={(0, 700)}
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={(0, 700)}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('actions-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button
                                primary
                                righticon={<FontAwesomeIcon icon={faSignIn} />}
                            >
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu
                        Items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5db62924a327574192a0f479d6e9bf6d~c5_100x100.jpeg?x-expires=1688536800&x-signature=AgDwLGGGMs%2FF3GYgGyf3%2F88TCp0%3D"
                                alt="Avatar"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                ></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
