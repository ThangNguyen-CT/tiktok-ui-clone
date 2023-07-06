import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from './SuggestedAccount.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(Styles);

function AccountItem() {
    const renderPriview = (prop) => (
        <div tabIndex="-1" {...prop}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy
                offset={[-20, 0]}
                interactive
                delay={[1000, 0]}
                placement="bottom"
                render={renderPriview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avater')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/69c103db876322c0e73c4e3546a4c8bf.jpeg?x-expires=1688796000&x-signature=tggqi8NnwPZR%2Bf6b6mm5EDXC1Cc%3D"
                        alt="avatar"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>ThangNguyen</strong>
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            />
                        </p>
                        <p className={cx('name')}>Nguyen Minh Thang</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
