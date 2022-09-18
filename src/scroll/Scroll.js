import './scroll.scss';
import scrollbarWidth from './scrollbar-width';
import { useState, useEffect, useRef } from 'react';

// 判断是否是触屏设备
const isTouchDevice = 'ontouchstart' in document.documentElement;
console.log(isTouchDevice);

const Scroll = (props) => {
    const { children, ...rest } = props;
    const [barHeight, setBarHeight] = useState(0);
    const [pullingHeight, setPullingHeight] = useState(0);
    const [barTop, _setBarTop] = useState(0);
    const [barVisible, setBarVisible] = useState(false);

    const setBarTop = (number) => {
        if (number < 0) { return; }
        const { current } = containerRef;
        const scrollHeight = current.scrollHeight;
        const viewHeight = current.getBoundingClientRect().height;
        const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
        if (number > maxBarTop) { return; }
        _setBarTop(number);
    }

    const timerIdRef = useRef(null);
    const onScroll = (e) => {
        setBarVisible(true);
        const { current } = containerRef;
        const scrollHeight = current.scrollHeight;
        const viewHeight = current.getBoundingClientRect().height;
        const scrollTop = current.scrollTop;
        setBarTop(scrollTop * viewHeight / scrollHeight);
        if (timerIdRef.current !== null) {
            window.clearTimeout(timerIdRef.current);
        }
        timerIdRef.current = window.setTimeout(() => {
            setBarVisible(false);
        }, 300);
    }
    // 相当于mounted
    const containerRef = useRef(null);
    useEffect(() => {
        const scrollHeight = containerRef.current.scrollHeight;
        const viewHeight = containerRef.current.getBoundingClientRect().height;
        setBarHeight(viewHeight * viewHeight / scrollHeight);
    }, [])

    const draggingRef = useRef(false);
    const firstYRef = useRef(0);
    const firstBarTopRef = useRef(0);
    const onMouseDownBar = (e) => {
        draggingRef.current = true;
        firstYRef.current = e.clientY;
        firstBarTopRef.current = barTop;
    };
    const onMouseMoveBar = (e) => {
        if (draggingRef.current) {
            const delta = e.clientY - firstYRef.current;
            const newBarTop = firstBarTopRef.current + delta;
            setBarTop(newBarTop); // newBarTop这里不会立即生效，在队列里，和最后一行有微微的时间差，可能会出现bug，一般没有bug
            const scrollHeight = containerRef.current.scrollHeight;
            const viewHeight = containerRef.current.getBoundingClientRect().height;
            containerRef.current.scrollTop = newBarTop * scrollHeight / viewHeight; // newBarTop这里会立即生效
        }
    };
    const onMouseUpBar = () => {
        draggingRef.current = false;
    };

    const onSelect = (e) => {
        if (draggingRef.current) { e.preventDefault(); }
    }

    useEffect(() => {
        document.addEventListener('mouseup', onMouseUpBar);
        document.addEventListener('mousemove', onMouseMoveBar);
        document.addEventListener('selectstart', onSelect);
        return () => {
            document.removeEventListener('mouseup', onMouseUpBar);
            document.removeEventListener('mousemove', onMouseMoveBar);
            document.removeEventListener('selectstart', onSelect);
        }
    }, []);

    const [translateY, _setTranslateY] = useState(0);
    const setTranslateY = (y) => {
        if (y < 0) { y = 0; } else if (y > 150) { y = 150; }
        _setTranslateY(y)
    }
    const lastYRef = useRef(0); // 记录上一次滑动的位置
    const pulling = useRef(false);
    const moveCount = useRef(0);
    const onTouchStart = (e) => {
        const scrollTop = containerRef.current.scrollTop;
        if (scrollTop !== 0) { return; }
        pulling.current = true;
        lastYRef.current = e.touches[0].clientY;
        moveCount.current = 0;
    }
    const onTouchMove = (e) => {
        const deltaY = e.touches[0].clientY - lastYRef.current;
        moveCount.current += 1;
        if (moveCount.current === 1 && deltaY < 0) {
            pulling.current = false;
            return;
        }
        if (pulling.current === false) {
            return;
        }
        setTranslateY(translateY + deltaY);
        lastYRef.current = e.touches[0].clientY;
    }
    const onTouchEnd = (e) => {
        if (pulling.current) {
            setTranslateY(0);
            props.onPull && props.onPull();
            pulling.current = false;
        }

    }

    return (
        <div className="fui-scroll" {...rest}>
            <div className="fui-scroll-inner" style={{
                right: -scrollbarWidth(),
                transform: `translateY(${translateY}px)`
            }}
                ref={containerRef}
                onScroll={onScroll}
                onTouchMove={onTouchMove}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {children}
            </div>
            {barVisible && <div className="fui-scroll-track">
                <div className="fui-scroll-bar" style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
                    onMouseDown={onMouseDownBar}>
                </div>
            </div>}
            <div className="fui-scroll-pulling" style={{ height: translateY }}>
                {translateY === 150 ? <span class="fui-scroll-pulling-text">释放手指即可更新</span> : <span class="fui-scroll-pulling-icon">↓</span>}
            </div>
        </div>
    )
};
export default Scroll;