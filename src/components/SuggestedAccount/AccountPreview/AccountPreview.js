import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Stlyes from './AccountPreview.module.scss';
import Button from '~/components/Buttons/Button';
const cx = classNames.bind(Stlyes);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/69c103db876322c0e73c4e3546a4c8bf.jpeg?x-expires=1688796000&x-signature=tggqi8NnwPZR%2Bf6b6mm5EDXC1Cc%3D"
                    alt=""
                />
                <Button primary className={cx('btn-fl')}>
                    Following
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>ThangNguyen</strong>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx('name')}>Nguyen Minh Thang</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
