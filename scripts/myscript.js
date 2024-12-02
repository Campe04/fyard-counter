const $d = document,
      $valor = $d.querySelector("#valor"),
      $decrementar = $d.querySelector("#minus"),
      $incrementar = $d.querySelector("#plus"),
      $resetear = $d.querySelector("#reset")


$incrementar.addEventListener("click", ev=>{
    ev.preventDefault()
    $valor.innerHTML++
    color($valor)
})
$decrementar.addEventListener("click", ev=>{
    ev.preventDefault()
    $valor.innerHTML--
    color($valor)
})
$resetear.addEventListener("click", ev=>{
    ev.preventDefault()
    $valor.innerHTML=0
    color($valor)
})

function color(valor) {
    if(valor.innerHTML > 0){
        valor.style.color = "green"
    }else if(valor.innerHTML == 0){
        valor.style.color = "black"
    }else if(valor.innerHTML < 0){
        valor.style.color = "red"
    }
    
}