import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem';
const cx = classNames.bind(Styles);
function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('see-all-btn')}>See all</p>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
