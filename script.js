const textorecibido=document.getElementById("textoEncriptar");
const textoEncriptado=document.getElementById("textoDesencriptar");
const btnEncriptarDesencriptar=document.getElementById("btnEncriptarDesencriptar");
var bandera=0;

function EncriptarDesencriptar(){
    if(bandera==0){
        let siNumero=validarSiNumeros(textorecibido.value);
        let siCaracter=validarCaracteresEspeciales(textorecibido.value);
        let siAcentos=validarAcentos(textorecibido.value);
        if(siNumero==" " & siCaracter==" " & siAcentos==" "){
            textoEncriptado.value=encriptar(textorecibido.value);
            textoEncriptado.style.backgroundImage="none";
            bandera=1;
            btnEncriptarDesencriptar.innerHTML="&#129044 Desenpcritar" ;
            textorecibido.value="";
        }
        else{
            textoEncriptado.value="Error, el texto" + siNumero + siCaracter + siAcentos;
            textoEncriptado.style.color="yellow";
        }
    }
    else{
        let siNumero=validarSiNumeros(textorecibido.value);
        let siCaracter=validarCaracteresEspeciales(textorecibido.value);
        let siAcentos=validarAcentos(textorecibido.value);
        if(siNumero==" " & siCaracter==" " & siAcentos==" "){
            textorecibido.value=desencriptar(textoEncriptado.value);
            bandera=0;
            btnEncriptarDesencriptar.innerHTML="Encriptar &#10140" ;
            textoEncriptado.value="";
            textoEncriptado.style.backgroundImage="url(/imagenes/Muneco.png)";
            
        }
        else{
            textorecibido.value="Error, el texto" + siNumero + siCaracter + siAcentos;
            textoEncriptado.style.color="yellow";
        }

    }
    
    
}


function encriptar(cadenaEncriptar){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaEncriptar=cadenaEncriptar.toLowerCase();
    
    for(let i=0;i<matrizCodigo.length;i++){
        if(cadenaEncriptar.includes(matrizCodigo[i][0])){
        cadenaEncriptar=cadenaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return cadenaEncriptar;
    
    

}
function desencriptar(cadenaDesencriptar){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaDesencriptar=cadenaDesencriptar.toLowerCase();
    for(let i=0;i<matrizCodigo.length;i++){
        if(cadenaDesencriptar.includes(matrizCodigo[i][1])){
            cadenaDesencriptar=cadenaDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    console.log(cadenaDesencriptar)
    return cadenaDesencriptar;

}
function validarSiNumeros(cadenaValidar){
    if( tieneNumeros=cadenaValidar.toString().search(/[\d]/)>=0){
        return ". No debe contener números";
    }
    else{
        return " ";
    }
}
function validarCaracteresEspeciales(cadenaValidar){
    const formato = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(formato.test(cadenaValidar)){
        return ". No debe contener caracteres especiales";
    }
    else{
        return " ";
    }
}
function validarAcentos(cadenaValidar){
    const acentos="áéíóúñ";
    let bandera=0;
    for(let i=0;i<acentos.length;i++){
        if(cadenaValidar.includes(acentos[i])){
            bandera=1;
            break;
        }
    }
    if(bandera==1){
        return ". No debe contener acentos";
    }
    else{
        return " ";
    }
}
function onChanged(){
    if(textorecibido.value!="")
    {
        bandera=0;
        btnEncriptarDesencriptar.innerHTML="Encriptar &#10140" ;
        textoEncriptado.value="";
        textoEncriptado.style.backgroundImage="url(/imagenes/Muneco.png)";
    }
}
