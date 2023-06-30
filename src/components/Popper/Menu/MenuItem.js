import Button from '~/components/Buttons';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} lefticon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
