export default function scrollbarWidth() {
    if (typeof document === 'undefined') {
        return 0
    }

    var
        body = document.body,
        box = document.createElement('div'),
        boxStyle = box.style,
        width;

    boxStyle.position = 'absolute';
    boxStyle.top = boxStyle.left = '-9999px'; //把div放到屏幕之外
    boxStyle.width = boxStyle.height = '100px';
    boxStyle.overflow = 'scroll';

    body.appendChild(box);

    width = box.offsetWidth - box.clientWidth;

    body.removeChild(box);

    return width;
}