package model;

public class Produto {
    
    private int id;
    private String nome;
    private int quantidade;
    private double preco;

    //

    public Produto(int id, String nome, int quantidade, double preco){
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    //
    public int getId(){
        return id;
    }

    public String getNome(){
        return nome;
    }

    public int getQuantidade(){
        return quantidade;
    }

    public double getPreco(){
        return preco;
    }
    //

    public void setId(int id){
        this.id=id;
    }
    public void setNome(String nome){
        this.nome=nome;
    }
    public void setQuantidade(int quantidade){
        this.quantidade=quantidade;
    }
    public void setPreco(double preco){
        this.preco=preco;
    }   
    // 

    public String toCSV(){
        return id+";"+nome+";"+quantidade+";"+preco+";";
    }
    public static Produto fromCSV(String linha){
        String[] partes = linha.split(";");
        int id = Integer.parseInt(partes[0]);
        String nome = partes[1];
        int quantidade = Integer.parseInt(partes[2]);
        double preco = Double.parseDouble(partes[3]);
        return new Produto(id,nome,quantidade,preco);
    }
    @Override
    public String toString(){
        return String.format("ID: %d | NOME: %-20s | QUANTIDADE: %-5 | PREÇO: R$ %2.f", id, nome, quantidade, preco);
    }
}
