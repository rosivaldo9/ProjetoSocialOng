import React from 'react'
import { Link } from 'react-router-dom';
import '../template/style.css';

const Header = () =>
    (
        <ul className="nav nav-pills nav-fill ulIdex">
            <li className="nav-item">
                <Link to="/profile/educacao/cadastro-turma">  <a className="nav-link botIndex" href="#">Turma</a></Link>
            </li>
            <li className="nav-item">
                <Link to="/profile/educacao/turma-aluno">  <a className="nav-link botIndex" href="#">Turma Aluno </a></Link>
            </li>
            <li className="nav-item">
                <Link to="/profile/educacao/cadastro-frequencia"> <a className="nav-link botIndex" href="#">Frequencia</a></Link>
            </li>
        </ul>
    )

export default Header