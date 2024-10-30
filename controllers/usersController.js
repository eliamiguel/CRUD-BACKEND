import db from '../db.js';
export const getUsers = async (_, res) => {
  try {
    const data = await db`SELECT * FROM usuarios`; 
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};


export const addUser = async (req, res)=>{
  try {
    const {nome, email, numero, datadenasci} = req.body
    await db`INSERT INTO usuarios(nome, email, numero, datadenasci) 
              VALUES(${nome}, ${email}, ${numero}, ${datadenasci})`;

    return res.status(200).json('Usuário criado com sucesso')
  } catch (error) {
    return res.status(500).json("Erro ao criar usuário", error);
  }
}

export const updateUser = async (req, res)=>{
  try {
    const { id } = req.params;
    const {nome, email, numero, datadenasci} = req.body;
    await db`UPDATE usuarios 
              SET nome =${nome}, email =${email}, numero=${numero}, datadenasci=${datadenasci}) 
              WHERE id =${id}`;

    return res.status(200).json('Usuário atualizado com sucesso.', error)
  } catch (error) {
    return res.status(500).json("Erro ao atualizar usuário.");
  }
}

export const deleteUser = async (req,res)=>{

  try {
    const {id} = req.params
    await db`DELETE FROM usuarios WHERE id=${id}`;
    return res.status(200).json('Usuário deletado com sucesso.')
  } catch (error) {
    return res.status(500).json('Erro ao excluir usuário.', error)
  }
 
}
