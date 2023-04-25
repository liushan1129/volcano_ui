import request from '@/utils/request'


export function groupListByCondition(params?: any) {
    return request.get({ url: '/group/list/condition', params })
}
export function groupList(params: any) {
    return request.get({ url: '/group/list', params });
}
export function groupDetail(params: any) {
    return request.get({ url: '/group/detail', params });
}

export function groupAdd(params: any) {
    return request.post({ url: '/group/add', params });
}

export function groupEdit(params: any) {
    return request.post({ url: '/group/edit', params });
}

export function groupDelete(params: any) {
    return request.post({ url: '/group/del', params })
}

