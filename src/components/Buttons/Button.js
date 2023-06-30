import Styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(Styles);
function Button({
    to,
    href,
    disable,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    lefticon,
    righticon,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    //remove event when disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] == 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className, // custom css
        primary,
        outline,
        disable,
        rounded,
        small,
        large,
        text,
        lefticon,
        righticon,
    });
    return (
        <Comp className={cx(classes)} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    );
}

export default Button;
