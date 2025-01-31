import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PhoneIcon from '../../../../images/PhoneIcon';
import EmailIcon from '../../../../images/EmailIcon';

const Container = styled.div`
    position: relative;
    overflow: hidden;
    & img {
        position: absolute;
    }
`;

type Props = {
    value: string | undefined;
    className?: string;
    Image?: FC<string>;
};

const Element: FC<Props> = ({ value, className }) => {
    const getWidth = () => {
        if (refImg.current) {
            if (refImg.current.clientHeight > refImg.current.clientWidth) {
                return `100%`;
            }
            if (refImg.current.clientHeight == refImg.current.clientWidth && refContainer.current) {
                if (refContainer.current.clientWidth >= refContainer.current.clientHeight) {
                    return `100%`;
                }
            }
        }
        return 'auto';
    };
    const getHeight = () => {
        if (refImg.current) {
            if (refImg.current.clientWidth > refImg.current.clientHeight) {
                return `100%`;
            }
            if (refImg.current.clientWidth == refImg.current.clientHeight && refContainer.current) {
                if (refContainer.current.clientHeight >= refContainer.current.clientWidth) {
                    return `100%`;
                }
            }
        }
        return 'auto';
    };
    const getLeft = () => {
        if (refImg.current) {
            return `calc(50% - ${refImg.current.clientWidth / 2}px)`;
        }
        return '0';
    };
    const getTop = () => {
        if (refImg.current) {
            return `calc(50% - ${refImg.current.clientHeight / 2}px)`;
        }
        return '0';
    };
    const refImg = useRef<HTMLImageElement | null>(null);
    const refContainer = useRef<HTMLImageElement | null>(null);
    const [size, setSize] = useState({ width: getWidth(), height: getHeight() });
    const [position, setPosition] = useState({ left: getLeft(), top: getTop() });

    useEffect(() => {
        if (!refContainer.current) return;

        const observer = new ResizeObserver(() => {
            setTimeout(() => {
                setSize({ width: getWidth(), height: getHeight() });
            }, 10);
        });

        observer.observe(refContainer.current);
        return () => {
            observer.disconnect();
        };
    }, [value]);
    useEffect(() => {
        setTimeout(() => {
            setPosition({ left: getLeft(), top: getTop() });
        }, 10);
    }, [size, value]);
    return (
        <>
            {className === 'photo' ? (
                <Container ref={refContainer}>
                    <img
                        src={value}
                        ref={refImg}
                        width={size.width}
                        height={size.height}
                        style={{
                            left: position.left,
                            top: position.top,
                        }}
                    />
                </Container>
            ) : className === 'phoneNumber' || className === 'email' ? (
                <>
                    {className === 'phoneNumber' && <PhoneIcon color="black" />}
                    {className === 'email' && <EmailIcon color="black" />}
                    <p>{value}</p>
                </>
            ) : (
                <p>{value}</p>
            )}
        </>
    );
};

export default Element;
