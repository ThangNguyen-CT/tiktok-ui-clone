import PropTypes from 'prop-types';
import Styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Slider from '../components/Slidebar';
const cx = classNames.bind(Styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <Slider />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
