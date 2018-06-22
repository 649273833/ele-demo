let titleFun = function(chunkName,title){
    let titleDef = '饿了么';
    if(chunkName.indexOf('index') !==-1){
        return titleDef;
    }else{
        return title ;
    }
};
module.exports = {
    titleFun:titleFun
};