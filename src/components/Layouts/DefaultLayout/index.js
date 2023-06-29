import Styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../components/header';
import Slider from './Slidebar';
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

export default DefaultLayout;
