package pctPokemon.pokemon;

public class Eevee extends Pokemon {

    public Eevee() {
        super("Eevee", "Normal", 0.3, 6.5);
    }

    @Override
    public void mostrarInformacoes() {
        super.mostrarInformacoes();
        System.out.println("Habilidade: Adaptabilidade");
        System.out.println("Descrição: Pode evoluir para diferentes formas.");
    }
}