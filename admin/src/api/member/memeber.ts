import request from '@/utils/request'

export function memberList(params: any) {
    return request.get({ url: '/member/list', params });
}

export function memberListByCondition(params: any) {
    return request.get({url: '/member/getListByCondition', params})
}
export function memberDetail(params: any) {
    return request.get({ url: '/member/detail', params });
}

export function memberAdd(params: any) {
    return request.post({ url: '/member/add', params });
}

export function memberEdit(params: any) {
    return request.post({ url: '/member/edit', params });
}

export function memberDelete(params: any) {
    return request.post({ url: '/member/del', params })
}