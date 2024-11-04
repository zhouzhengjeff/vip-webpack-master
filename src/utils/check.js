export const checkPhone = (phone) => {
    let reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/
    return reg.test(phone)
}

export const checkCode = (code) => {
    let reg = /^\d{6}$/
    return reg.test(code)
}

