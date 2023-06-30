import classNames from 'classnames/bind';
import Styles from './slidebar.module.scss';
const cx = classNames.bind(Styles);
function Slider() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2>Slider page</h2>
            </div>
        </aside>
    );
}

export default Slider;
