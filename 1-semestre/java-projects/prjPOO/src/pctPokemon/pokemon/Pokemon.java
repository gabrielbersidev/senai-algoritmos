package pctPokemon.pokemon;

public class Pokemon {

    protected String nome;
    protected String tipo;
    protected double altura;
    protected double peso;

    public Pokemon(String nome, String tipo, double altura, double peso) {
        this.nome = nome;
        this.tipo = tipo;
        this.altura = altura;
        this.peso = peso;
    }

    public void mostrarInformacoes() {
        System.out.println("Nome: " + nome);
        System.out.println("Tipo: " + tipo);
        System.out.println("Altura: " + altura + " m");
        System.out.println("Peso: " + peso + " kg");
    }
}