let count = 1
document.getElementById("radio1").checked = true

setInterval( function(){
    nextImage()
}, 5000)

function nextImage() {
    count++
    if(count>9){
        count = 1
    }

    document.getElementById("radio"+count).checked = true
}

// Colocamos para ficar passando as imagens do slide a cada 5segundos, atuomaticamente