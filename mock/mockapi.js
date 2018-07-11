import Mock from 'mockjs';


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
  'systemDate':new Date().getTime()
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
Mock.mock(/\/searchlist.mock/,{
  'code':1,
  data:{
    'searchlist|5-20':[{
      'id|+1':1,
      'name':Mock.Random.ctitle(1,4)
    }]
  },
  'message':'获取成功！',
  'systemDate':new Date().getTime()
})
Mock.mock(/\/tuijianlist.mock/,{
  'code':1,
  data:{
    'tuijianlist':[
      '烤鸭',
      '土豆',
      '海底捞',
      '工作餐减25',
      '肉',
      '豆腐',
      '冒菜',
      '回锅肉',
    ]
  },
  'message':'获取成功！',
  'systemDate':new Date().getTime()
})

Mock.mock(/\/shoplist.mock/,{
  'code':1,
  data:{
    'startPrice|0-50':10,
    'specially|':true,
    'prefer|0-15':10,
    'speciallyPrice|0-10':2,
    'name':Mock.Random.ctitle(4,8),
    'shoplist|5-20':[{
      'id|+1':1,
      'listnownum':0,
      'name':Mock.Random.ctitle(1,4),
      'anchor':'Anchor@id',
      'children|1-5':[{
        'fid|+1':1,
        'name':Mock.Random.ctitle(4),
        'pricenum|2-500':343,
        'praise|0-100':92,
        'discount|':true,
        'price|0-50':25,
        'discountnum|0-100':80,
        'nownum':0
      }]
    }]
  },
  'message':'获取成功！',
  'systemDate':new Date().getTime()
})
Mock.mock(/\/shopcarlist.mock/,{
  'code':1,
  data:{
    'result':'好了,外卖已经点好了，安心学习吧！',
  },
  'message':'获取成功！',
  'systemDate':new Date().getTime()
})