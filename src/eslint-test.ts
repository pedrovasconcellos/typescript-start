import { DateTime } from "luxon";

CreateTet('er');
function CreateTet(nome: String): String{
    while (true){

    }
    return nome + 'Test';
}

function ComplexFunction(value: unknown): any {
    if(DateTime.now().month === 1){
        console.log('aqui');
    }
    if(DateTime.now().month === 1){
        console.log('aqui');
    }

    if(value == 55) {
        if(DateTime.now().month === 1){
            if(DateTime.now().year === 3){
                return 2;
            }
        } 
    }
    else {
        if(DateTime.now().month === 1){
            return 0
        }
        if(DateTime.now().year === 3){
            return 3;
        }
        return 1;
    }
}