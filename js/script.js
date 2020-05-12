class Operaciones{
    constructor(num1, num2, oper){
        this.num1 = parseFloat(num1);
        this.num2 = parseFloat(num2);
        this.oper = parseFloat(oper);
    };
    suma(){
        return (this.num1+this.num2)
    };

    resta(){
    return (this.num1-this.num2)
    }

    multiplicacion(){
        return (this.num1*this.num2)
        }

        division(){
            return (this.num1/this.num2)
            }
};
    

function calcular(){
    var operacion = new Operaciones(
        document.getElementById("n1").value,
        document.getElementById("n2").value,
        document.getElementById("opc").value);
    switch(operacion.oper){
        case 1: document.getElementById("resultado").value=operacion.suma();
                break;
        case 2: document.getElementById("resultado").value=operacion.resta();
            break;
            case 3: document.getElementById("resultado").value=operacion.multiplicacion();
            break;
            case 4: document.getElementById("resultado").value=operacion.division();
            break;
       
    }  
}