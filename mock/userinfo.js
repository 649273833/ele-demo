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
      'name':'小马',
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