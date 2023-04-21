import request from '@/utils/request'

export function courseTypeAll(params?: any) {
    return request.get({ url: '/courseType/all', params })
}
export function courseTypeList(params: any) {
    return request.get({ url: '/courseType/list', params });
}
export function courseTypeDetail(params: any) {
    return request.get({ url: '/courseType/detail', params });
}

export function courseTypeAdd(params: any) {
    return request.post({ url: '/courseType/add', params });
}

export function courseTypeEdit(params: any) {
    return request.post({ url: '/courseType/edit', params });
}

export function courseTypeDelete(params: any) {
    return request.post({ url: '/courseType/del', params })
}