exports.getPosts = async ctx => {
    //中间处理函数
    await ctx.render('posts', {

    })

}

exports.getRedirectPosts = async ctx => {
    ctx.redirect('/posts');
}