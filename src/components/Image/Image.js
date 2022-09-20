import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from "classnames";
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

// Nhận ref từ forwardRef trả về. Khi mount thì component Image sẽ có ref và đem ref ra ngoài từ đó tippy sẽ nhận được
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    }

    // eslint-disable-next-line jsx-a11y/alt-text
    return <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
    />;
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string
}

export default Image;