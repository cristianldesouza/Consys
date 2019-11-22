import Registros from "../models/Registros";
import Motoristas from "../models/Motoristas";
import Clientes from "../models/Clientes";
import Configuracoes from "../models/Configuracoes";

module.exports = {
  async index(req, res) {
    const listaDeRegistros = await Registros.findAll({
      include: [
        {
          model: Motoristas,
          as: "motorista"
        },
        {
          model: Clientes,
          as: "cliente"
        }
      ]
    });

    return res.status(200).json(listaDeRegistros);
  },

  async entrada(req, res) {
    //Obs: Na entrada, os campos de data_saida e valor_locacao ficarao nulos
    //Obs2: status 0 = somente entreou, status 1 = já saiu
    const registro = {
      data_entrada: req.body.dataEntrada,
      data_saida: null,
      valor_locacao: null,
      motorista_id: req.body.motoristaId,
      cliente_id: req.body.clienteId,
      status: 0,
      previsao_dias: req.body.previsao,
      localizacao: req.body.localizacao,
      container_pes: req.body.containerPes,
      usuario_id: 1,
      nivel: req.body.nivel
    };
    
    
    const registros = await Registros.findAll({ where: { status: 0 }});
    const qtdConfig = await Configuracoes.findAll();
    console.log(registros.length);
    console.log(qtdConfig[0].qtd_containers);

    if (registros.length >= qtdConfig[0].qtd_containers) {
      return res.status(404).json({ status: 'Capacidade máxima de containers configurada atingida.' });
    }

    await Registros.create(registro);
    const updatedRegistros = await Registros.findAll();
    
    return res.status(200).json(updatedRegistros[updatedRegistros.length - 1]);
  },

  async saida(req, res) {
    //Obs: Na entrada, os campos de data_saida e valor_locacao ficarao nulos
    //Obs2: status 0 = somente entreou, status 1 = já saiu
    const registro = {
      id: req.body.id,
      data_saida: req.body.dataSaida,
      valor_locacao: req.body.valorLocacao
    };

    await Registros.update(
      {
        data_saida: registro.data_saida,
        valor_locacao: registro.valor_locacao,
        status: 1
      },
      { where: { id: registro.id } }
    );
    const reg = await Registros.findOne({ where: { id: registro.id } });

    return res.status(200).json(reg);
  }
};
