function scopedClassMaker(prefix) {
    return function x(name) {
        if (typeof name === 'object') {
            const arr = [];
            Object.keys(name).forEach(item => {
                if(name[item]) {
                    arr.push([prefix, item].filter(Boolean).join('-'))
                }
                
            })
            return arr.join(' ');
        }
        return [prefix, name].filter(Boolean).join('-');
    }
}

export { scopedClassMaker }