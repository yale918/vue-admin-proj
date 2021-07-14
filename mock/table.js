const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/vue-admin-template/table/yalelist',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/vue-admin-template/table/ya',
    type: 'get',
    response: config => {
      const itemss = t_data
      return {
        code: 20000,
        data: {
          //total: itemss.length,
          items: itemss
        }
      }
    }
  },
]

  const count=5;
  const t_type = ["介面","儲值","帳號","訊息回報","其他"]
  const t_nums = ["#65","#56","#33","#17","#62"]
  const t_issue = ["沒反應", "發現錯誤", "無法登入", ",mob異常","連線緩慢"]
  const t_prio = [1,1,2,3,3]
  const t_state = [1,2,3,1,2]
  const t_temp = [1,2,3,1,2]
  const t_name = ["張三","李四","小明","校長","老師"]

  let t_data =[]
  
  for(i=0;i<count;i++){
    let rand_num = Math.floor(Math.random()*5)
    const tt = {
      id:t_type[rand_num],
      title_num:t_nums[rand_num],
      title:t_issue[rand_num],
      status:t_temp[rand_num],
      author:t_prio[rand_num],
      display_time:t_state[rand_num],
      pageviews:t_name[rand_num],
      }
      t_data[i] = tt
  }
  console.log(t_data)
