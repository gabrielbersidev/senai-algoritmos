package model;

public class Moto extends Veiculo {

    private int cilindradas;

    public Moto(String marca, String modelo, int ano, int cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    
    @Override
    public void showInfo() {
        super.showInfo();
        System.out.println("Cilindradas (CC): " + cilindradas);
    }
}
