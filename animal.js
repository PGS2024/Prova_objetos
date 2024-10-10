class Animal {
    som() {
        return "Som de animal";
    }
}

class cachorro extends Animal {
    som(){
        return "Au, au";
    }
}


const MeuCachorro = new cachorro();

console.log(MeuCachorro.som());


