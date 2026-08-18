package app;

import model.Veiculo;
import model.Carro;
import model.Moto;

public class Main {

    public static void main(String[] args) {
        Veiculo carroGenerico = new Carro("Volkswagen", "T-Cross", 2020, 4);
        carroGenerico.showInfo();

        Veiculo motoGenerico = new Moto("Kawasaki", "Ninja 400", 2019, 400);
        motoGenerico.showInfo();

    }
}