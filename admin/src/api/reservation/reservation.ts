import request from '@/utils/request'
export function reservationListByCondition(params?: any) {
    return request.get({ url: '/reservationRecord/list/condition', params })
}
export function reservationList(params: any) {
    return request.get({ url: '/reservationRecord/list', params });
}
export function reservedTimeList(params: any) {
    return request.get({ url: '/reservationRecord//enableTimeList/list', params });
}

export function reservationDetail(params: any) {
    return request.get({ url: '/reservationRecord/detail', params });
}

export function reservationAdd(params: any) {
    return request.post({ url: '/reservationRecord/add', params });
}

export function reservationEdit(params: any) {
    return request.post({ url: '/reservationRecord/edit', params });
}

export function reservationCancel(params: any) {
    return request.post({ url: '/reservationRecord/cancel', params })
}