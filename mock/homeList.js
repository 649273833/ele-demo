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
  'systemData':new Date().getTime()
})