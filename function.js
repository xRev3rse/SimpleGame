var ob = document.querySelector('#obstacle');
var p = document.querySelector('#character');
var msglose = document.querySelector('#gameover')

function jump() {
    if (p.classList != 'anim') {
        p.classList.add('anim')
    }

    setTimeout(function() {
        p.classList.remove('anim')
    }, 600)
}
    var colidir = setInterval( function(){
        var topcharacter = parseInt(
            getComputedStyle(p).getPropertyValue('top')
        )
        var  leftobs = parseInt(
            getComputedStyle(ob).getPropertyValue('left')
        )

        if(leftobs < 20 && leftobs > 0 && topcharacter >= 130) {
            ob.style.animation = 'none'
            ob.style.display   = 'none'
            p.style.display    = 'none'
            msglose.innerHTML  = 'VOCÊ PERDEU :('
        }
}, 10)