package app;

import model.ContaBancaria;

public class Main {
    public static void main(String[] args) {

        ContaBancaria contaBancariaNaruto = new ContaBancaria("Naruto", 123456789, 10000);

        System.out.println("");
        contaBancariaNaruto.showInfo();
        System.out.println("");

        contaBancariaNaruto.Depositar(10000);
        System.out.println("");
        
        contaBancariaNaruto.Sacar(1000);        
        System.out.println("");


        contaBancariaNaruto.showInfo();
    }
}