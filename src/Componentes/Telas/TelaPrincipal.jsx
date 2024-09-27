import { Container } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import {Candidatos} from "../../dados/candidatos";
export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato]=useState(false);
    const [listaCandidatos, setListaCandidatos] = useState(Candidatos);
    const [candidatoSelecionado, setCandidatoSelecionado] = useState({
        "id": 0,
        "email": "",
        "nome": "",
        "avatar": "",
        "propostas":[],
        "curtidas":0,
        "descurtidas":0,
        "questionamentos":[]
    });
    return (

        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato 
                    listaCandidatos={listaCandidatos}
                    setListaCandidatos={setListaCandidatos}
                    setDetalharCandidato={setDetalharCandidato}
                    candidatoSelecionado={candidatoSelecionado}
                    setCandidatoSelecionado={setCandidatoSelecionado}/>
                ) : (
                    <GridCandidatos listaCandidatos={listaCandidatos}
                    setListaCandidatos={setListaCandidatos}
                    setDetalharCandidato={setDetalharCandidato}
                    detalharCandidato={detalharCandidato}
                    candidatoSelecionado={candidatoSelecionado}
                    setCandidatoSelecionado={setCandidatoSelecionado} />
                )
            }
        </Pagina>
    );
}