import Mock from 'mockjs'

Mock.mock(/\/todoList.mock/,{
    'code':0,
    data:{
        'list|1-10':[{
            'id|+1':1,
            'title':'神经病摇摇欲坠@id',
            'status':1
        }]
    },
    'message':'操作成功！',
    'systemData':new Date().getTime()
});
Mock.mock(/\/info.mock/,{
  'code':1,
  data:{
    'data|1':[{
      'id':1,
      'wallte|0-999':23,
      'redenv|0-999':21,
      'gold|0-999':22,
    }],
    'address|1-10':[{
      'id|+1':1,
      'name':Mock.Random.cname(),
      'gender|1':true,
      'phone':'18381625660',
      'region':Mock.Random.region(),
      'city':Mock.Random.city(true),
      'street':'时代广场B座总府路2 1802b'
    }]
  },
  'message':'操作成功！',
  'systemData':new Date().getTime()
})
Mock.mock(/\/order.mock/,{
  'code':1,
  data:{
    'order|5-10':[{
      'id|+1':1,
      'name':Mock.Random.ctitle(5,20),
      'status|':true,
      'time':Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),
      'dishes':Mock.Random.cparagraph(5,20),
      'price|1-100.1-2':1,
      'orderimg':Mock.Random.image('250x250')
}]
  },
  'message':'获取成功！',
  'systemData':new Date().getTime()
})