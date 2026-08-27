package model;
import java.time.LocalDateTime;

public class MovimentacaoEstoque{

    private int idProduto;
    private TipoMovimentacao tipo;
    private int quantidade;
    private LocalDateTime dataHora;

    //


    public MovimentacaoEstoque(int idProduto, TipoMovimentacao tipo, int quantidade, LocalDateTime dataHora){
        this.idProduto = idProduto;
        this.tipo = tipo;
        this.quantidade = quantidade;
        this.dataHora = dataHora;
    }

    public void setIdProduto(int idProduto){
        this.idProduto=idProduto;
    }

    public void setTipo(TipoMovimentacao tipo){
        this.tipo = tipo;
    }

    public void setQuantidade(int quantidade){
        this.quantidade=quantidade;
    }

    public void setDataHora(LocalDateTime dataHora){
        this.dataHora = dataHora;
    }

    public int getIdProduto(){
        return idProduto;
    }

    public TipoMovimentacao getTipo(){
        return tipo;
    }

    public int getQuantidade(){
        return quantidade;
    } 

    public LocalDateTime getDataHora(){
        return dataHora;
    }
    

    public String toCSV(){
        return idProduto+";"+tipo+";"+quantidade+";"+dataHora.toString()+";";
    }

    public static MovimentacaoEstoque fromCSV(String linha){
        String[] partes = linha.split(";");
        int idProduto = Integer.parseInt(partes[0]);
        TipoMovimentacao tipo = TipoMovimentacao.valueOf(partes[1]);
        int quantidade = Integer.parseInt(partes[2]);
        LocalDateTime dataHora = LocalDateTime.parse(partes[3]);
        return new MovimentacaoEstoque(idProduto,tipo,quantidade,dataHora);
    }

    @Override
    public String toString(){
        return String.format("Produto ID: %d | TIPO: %-20s | QUANTIDADE: %-5 | DATA: R$ %2.f", idProduto, tipo, quantidade, dataHora.toString());
    }
}