package app;

import model.Livro;
import model.LivroDigital;
import model.LivroFisico;

public class Main {

    public static void main(String[] args) {

        Livro livroGenericoTeste = new Livro("Livro Genérico", "Um Cara Genérico", 1000000);
        livroGenericoTeste.showInfo();

        LivroDigital coraline = new LivroDigital("Coraline", "Neil Gaiman", 12, 128);
        coraline.showInfo();

        LivroFisico pequenoPrincipe = new LivroFisico("Pequeno Príncipe", "Antoine de Saint-Exupéry", 34, "A8");
        pequenoPrincipe.showInfo();

        pequenoPrincipe.toLoan(2);
    }
}