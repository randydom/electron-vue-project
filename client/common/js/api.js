/*
    数据来源: https://www.easy-mock.com
    username: wushaobin
    password: 123456
 */

import axios from 'axios'

const domain = 'https://www.easy-mock.com/mock/597fe839a1d30433d84e9a22/electron/'

const ajaxUrl = {
    doLogin: domain + 'doLogin', // 用户登录
    getDiscountBillsData: domain + 'getDiscountBillsData', // 临保商品特价单申请列表
    getBillDetails: domain + 'getBillDetails' // 获取临保商品特价单申请单商品详情
}

// 使用了easy-mock提供数据，保持返回数据统一性
export const commonAjax = (options) => {
    return axios(options).then((response) => {
        return Promise.resolve(response.data)
    }).catch((err) => {
        return Promise.reject(err)
    })
}

export default ajaxUrl