const express = require('express');

const modelCliente = require('../model/modelCliente');

const rota = express.Router();

rota.post('/cadastrarCliente', (req, res)=>{
    console.log(req.body);
    let {nome_cliente} = req.body;
    modelCliente.create(
        {nome_cliente}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE INSERIDO COM SUCESSO"
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO INSERIR CLIENTE",
                errorObject:error
            })
        }
    )

});

rota.get('/listarCliente', (req, res)=>{
    modelCliente.findAll()
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus: false,
                    mensagemStatos:"LISTAGEM REALIZADA",
                    data: response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus: true,
                    mensagemStatus:"LISTAGEM NÃO REALIZADA",
                    errorObject: error
                });
            }
        )
});

rota.get('/listarClientePK/:idCliente', (req, res)=>{
    let {idCliente} = req.params;  
    modelCliente.findByPk(idCliente)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatos:"LISTAGEM REALIZADA",
                data: response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus:"LISTAGEM NÃO REALIZADA",
                errorObject: error
            });
        }
    )
});

rota.get('/listarClienteNOME/:nome_cliente', (req, res)=>{
        let {nome_cliente} = req.params;  
        modelCliente.findOne({attributes:['idCliente', 'nome_cliente'],where:{nome_cliente}})
        .then(
            (response)=>{
                return res.status(200).json({
                    erroStatus: false,
                    mensagemStatos:"LISTAGEM REALIZADA",
                    data: response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus: true,
                    mensagemStatus:"LISTAGEM NÃO REALIZADA",
                    errorObject: error
                });
            }
        )
});
rota.get('/listarClienteCPF/:CPF_cliente', (req, res)=>{
    let {CPF_cliente} = req.params;  
    modelCliente.findOne({attributes:['idCliente', 'CPF_cliente'],where:{CPF_cliente}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatos:"LISTAGEM REALIZADA",
                data: response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus:"LISTAGEM NÃO REALIZADA",
                errorObject: error
            });
        }
    )
});

rota.get('/listarClienteEMAIL/:email_cliente', (req, res)=>{
    let {email_cliente} = req.params;  
    modelCliente.findOne({attributes:['idCliente', 'email_cliente'],where:{email_cliente}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatos:"LISTAGEM REALIZADA",
                data: response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus:"LISTAGEM NÃO REALIZADA",
                errorObject: error
            });
        }
    )
});

rota.get('/listarClienteTELEFONE/:telefone_cliente', (req, res)=>{
    let {telefone_cliente} = req.params;  
    modelCliente.findOne({attributes:['idCliente', 'telefone_cliente'],where:{telefone_cliente}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatos:"LISTAGEM REALIZADA",
                data: response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus:"LISTAGEM NÃO REALIZADA",
                errorObject: error
            });
        }
    )
});

rota.put('/alterarCliente', (req, res)=>{
    const {idCliente, nome_cliente, CPF_cliente, email_cliente, telefone_cliente} = req.body;
    modelCliente.update(
        {nome_cliente, CPF_cliente, email_cliente, telefone_cliente},
        {where:{idCliente}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatos:"ALTERAÇÃO REALIZADA",
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus:"ERRO AO ALTERAR",
                errorObject: error
            });
        }
    );
});

rota.delete('/excluirCliente/:idCliente', (req, res)=>{
    console.log(req.params);
    let {idCliente} = req.params
    modelCliente.destroy(
        {where:{idCliente}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatos:"EXCLUSÃO REALIZADA",
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus:"ERRO AO EXCLUIR",
                errorObject: error
            });
        }
    );
});
module.exports = rota;