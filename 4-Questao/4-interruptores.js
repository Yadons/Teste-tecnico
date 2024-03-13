let interruptor1 = true;
let interruptor2 = false;
let interruptor3 = false;

// A ideia é saber esperar.
/* Se ligar o primeiro interruptor e aguardar a lâmpada esquentar e depois sair da sala e verificar qual foi acessa, consegue resolver o resto por meio de eliminação */
if(interruptor1 == true) { /*Se O 1 interruptor está como true e ligou uma das lâmpadas, automaticamente dá para saber qual foi essa lâmpada se ela esquentou, e que os demais interruptores estão como false. */
    interruptor2 == false;
    interruptor3 == false;
}else if (interruptor2 == true) {
    interruptor1 == false;
    interruptor3 == false;
} else {
    interruptor3 == true;
    interruptor1 == false;
    interruptor2 == false;
}
/* Do mesmo jeito funciona com os demais */