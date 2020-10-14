import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Tabela from './tabela'
function filtro(props) {
    var t = []
    for (var i = 0; i < props.length; i++) {
        t.push(props[i]);
        t[i]["nome"] = <Link to={`/profile/educacao/update-turma/${props[i]["_id"]}`}>{props[i]["nome"]}</Link>
        t[i]["frequencia"] = <Link to={`/profile/educacao/cadastro-frequencia/${props[i]["_id"]}`}>Frequencia</Link>
        t[i]["deletar"] = <button><Link to={`/profile/educacao/deletar-turma/${props[i]["_id"]}`}>Deletar</Link></button>
    }
    return t;
}

const IndexTurma = ({ turmas }) => (
    <div>
        <Tabela rows={filtro(turmas)}/>
    </div>
)


export default IndexTurma;