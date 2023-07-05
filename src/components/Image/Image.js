import PropTypes from 'prop-types';
import classNames from 'classnames';

import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import Styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallBack, setFallBack] = useState();
    const handleErorr = () => {
        setFallBack(images.noImgae);
    };
    return (
        <img
            className={classNames(Styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleErorr}
        />
    );
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};
export default Image;
