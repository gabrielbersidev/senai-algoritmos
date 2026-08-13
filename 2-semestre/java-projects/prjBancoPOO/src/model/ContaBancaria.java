package model;

public class ContaBancaria {

    private String nomeTitular;
    private int numConta;
    private float numSaldo;

    public ContaBancaria(String nomeTitular, int numConta, float numSaldo) {
        this.nomeTitular = nomeTitular;
        this.numConta = numConta;
        this.numSaldo = numSaldo;
    }
// // // // // 

    public String getTitular() {
        return nomeTitular;
    }

    public int getNumConta() {
        return numConta;
    }

    public float getSaldo(){
        return numSaldo;
    }

// // // // // 

    public void showInfo(){
        System.out.println("Nome do titular: " + nomeTitular);
        System.out.println("Número da conta: " + numConta);
        System.out.println("Saldo bancário: " + numSaldo);
    }

// // // // //

    public void Depositar(float valorDeposito){
        numSaldo = numSaldo + valorDeposito;
        System.out.println(nomeTitular + ", você depositou " + valorDeposito + "R$ e agora tem " + numSaldo + "R$ em sua conta!");
    }

    public void Sacar(float valorSaque){
        numSaldo = numSaldo - valorSaque;
        System.out.println("Saque de " + valorSaque + "R$ realizado com sucesso, agora há" + numSaldo + "R$ em sua conta!");
    }
}