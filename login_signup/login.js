document.querySelector('.signup-btn').addEventListener('click',()=>{
    document.querySelector('.login').style["transform"] = "translate(-50%,-100%) rotateZ(90deg)"
    setTimeout( ()=> { 
        document.querySelector('.login').style["opacity"] = "0"
     }, 200 )
    setTimeout( ()=> { 
        document.querySelector('.signup').style['z-index'] = "1" 
    }, 1100 )
})
document.querySelector('.login-btn').addEventListener('click',()=>{
    document.querySelector('.signup').style['z-index'] = "-1"
    setTimeout( ()=> { 
        document.querySelector('.login').style["opacity"] = "1"
        document.querySelector('.login').style["transform"] = "translate(-50%,-50%)"
     }, 200 )
})