import Mock from 'mockjs';

Mock.mock(/\/category.mock/,{
  'code':1,
  data:{
    'category|9':[{
      'id|+1':1,
      'name':Mock.Random.ctitle(2,4),
      'img':Mock.Random.image('250x250')
    }]
  },
  'message':'获取成功！',
  'systemDate':new Date().getTime()
})
Mock.mock(/\/foodlist.mock/,{
  'code':1,
  data:{
    'foodlist|5-10':[{
      'id|+1':1,
      'name':Mock.Random.ctitle(4,8),
      'star|1-4.1':4,
      'sellnum|200-5000':342,
      'specially|':true,
      'startPrice|0-100':20,
      'speciallyPrice|0-10':2,
      'distance|0-10.1':2.4,
      'time|10-120':18,
      'sub|15-25':15,
      'status':false,
      'more|1-30':[{
        'mid|+1':1,
        'name':Mock.Random.ctitle(4)
      }]
    }]
  },
  'message':'获取成功！',
  'systemDate':new Date().getTime()
})