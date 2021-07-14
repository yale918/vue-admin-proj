import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/yalelist',
    method: 'get',
    params
  })
}

export function getList1(params) {
  console.log("hhhhh11111")
  return request({
    url: '/vue-admin-template/table/ya',
    method: 'get',
    params
  })
}