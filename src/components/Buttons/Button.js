import Styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    disable: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    lefticon: PropTypes.node,
    righticon: PropTypes.node,
    onClick: PropTypes.func,
};
export default Button;
