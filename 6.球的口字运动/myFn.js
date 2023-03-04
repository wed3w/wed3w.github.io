//读取元素样式 el:元素 attr:属性(字符串)
function getStyle(el,attr){
    return window.getComputedStyle(el)[attr]
}

//运动
//moveFn(元素,属性,目标位置,步长,速度,回调函数)
function moveFn(el,attr,target,step,speed,callback){
    //处理负值步长：如果元素位置 < 目标位置 ? 正步长 : 负步长
    step = parseFloat(getStyle(el,attr)) < target ? step : -step
    //创建定时器之前先清除定时器
    clearInterval(timer)
    //创建定时器
    timer = setInterval(function(){
        //temp:创建一个暂时变量
        let temp = parseFloat(getStyle(el,attr))
        //attrValue:在元素当前位置上 + 步长
        let attrValue = temp + step
        //如果step是正值就执行attrValue > target || 如果step是负值就执行attrValue < target
        if(attrValue > target && step > 0 || attrValue < target && step < 0){
            //让当前位置=目标位置
            attrValue = target
            //清除定时器
            clearInterval(timer)
        }
        //修改元素的属性值
        div.style[attr] = attrValue + 'px'
        //如果属性值=目标位置就清除定时器
        if(attrValue = target){
            clearInterval(timer)
            callback && callback()
        }
    },speed)
}