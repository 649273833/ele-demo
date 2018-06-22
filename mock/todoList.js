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
})