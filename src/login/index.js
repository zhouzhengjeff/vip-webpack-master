import {checkCode, checkPhone} from "../utils/check";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './index.less'

document.querySelector('.btn').addEventListener('click', () => {
    const mobile = document.querySelector('input[name="mobile"]').value
    const code = document.querySelector('input[name="code"]').value
    console.log(mobile, code)

    if (!checkPhone(mobile)) {
        alert('请输入正确的手机号')
        return
    }

    if (!checkCode(code)) {
        alert('请输入正确的验证码')
        return
    }

    alert('登录成功')
})

