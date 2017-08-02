if ( process.env.NODE_ENV === 'production'  ){
    module.exports('./prod.js')
}else {
    module.exports('./dev.js')
}