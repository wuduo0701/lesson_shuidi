exports.getSignin = async (ctx)=> {
    //中间处理函数
    await ctx.render('signin', {
        
    })
}

exports.postSignin = async (ctx)=> {
    //中间处理函数
    ctx.body = {
        mes: '登入成功'
    }
}