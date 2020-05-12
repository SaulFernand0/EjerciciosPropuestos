class Usuario{
    constructor(usuario, contraseña){
        this.usuario = usuario;
        this.contraseña = contraseña;
    };
};


var contador = 0;

function login(){
        var user1 = new Usuario("admin", "123");
        if(document.getElementById("usuario").value === user1.usuario && document.getElementById("contraseña").value === user1.contraseña){
            alert("ingreso con exito")
        
        }else{
            contador+=1;
            alert("Intente Nuevamente");
            document.getElementById("usuario").value = "";
            document.getElementById("contraseña").value = "";
            if(contador == 3) {
                document.getElementById("usuario").disabled = true;
                document.getElementById("contraseña").disabled = true;
                alert("Se supero la cantidad de intentos permitidos")
            }

        }
    }