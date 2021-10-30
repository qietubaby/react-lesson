// ['1',undefined].join(' ')  // 结果 '1 '


function classes(...names) {
    return names.filter(Boolean).join(' ');
}

export default classes;