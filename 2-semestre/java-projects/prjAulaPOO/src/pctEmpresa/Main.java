package pctEmpresa;
import pctEmpresa.funcionarios.FuncionarioDiarista;
import pctEmpresa.funcionarios.FuncionarioMensal;

public class Main {
    public static void main(String[] args) {
        
        FuncionarioDiarista funcionarioDiarista = new FuncionarioDiarista();
        FuncionarioMensal funcionarioMensal = new FuncionarioMensal();

        System.out.println("\nFuncionário Mensalista Exemplo:");
        funcionarioMensal.showInfo();

        System.out.println("\nFuncionário Diarista Exemplo:");
        funcionarioDiarista.showInfo();
    }
}
