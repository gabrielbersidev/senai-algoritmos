package pctEmpresa.funcionarios;

public class Funcionario {

    protected String nome;
    protected String salarioTipo;
    protected String sexo;
    protected int idade;
  
    public Funcionario(String nome, String salarioTipo, String sexo, int idade){
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
        this.salarioTipo = salarioTipo;

    }


    public void showInfo (){
        System.out.println("Nome: "+nome);
        System.out.println("Sexo: "+sexo);
        System.out.println("Idade: "+idade);
        System.out.println("Tipo de salário: "+salarioTipo);
        
    }

}
