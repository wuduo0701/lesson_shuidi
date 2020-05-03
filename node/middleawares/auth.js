let isLogged = false;
module.exports = (ctx, next) => {
  if(!isLogged){
    ctx.redirect('/login')
  }else{
    next();
  }
}