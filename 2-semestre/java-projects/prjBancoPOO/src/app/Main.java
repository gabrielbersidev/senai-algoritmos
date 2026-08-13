package app;

import model.ContaBancaria;

public class Main {
    public static void main(String[] args) {

        ContaBancaria contaBancariaNaruto =
                new ContaBancaria("Naruto", 123456789, 100);

        contaBancariaNaruto.showInfo();

        contaBancariaNaruto.Depositar(10000);
        contaBancariaNaruto.Sacar(1000);

        contaBancariaNaruto.showInfo();
    }
}