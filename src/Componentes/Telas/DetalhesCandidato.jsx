import { useState } from "react";
import { Container, Card, Button, Row } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    const [questionamento, setQuestionamento] = useState([])
    const [listaQuestionamento, setListaQuestionamento] = useState([])


    const manipularMudanca = (evento) => {
        setQuestionamento(evento.target.value)
    };

    const addItem = () => {
        if(questionamento.trim() !== ''){
            setListaQuestionamento([...listaQuestionamento,questionamento]);
            setQuestionamento('');
        }
    }

    return (
        <Container>
            <Row className='text-center'>
                <Button onClick={() => {
                    props.setDetalharCandidato(false)
                }}>Voltar</Button>
            </Row>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height="300" width="300" src={props.candidatoSelecionado.avatar} />
            </Card>
            <h1>Detalhes Candidato</h1>
            <p>{"Email: " + props.candidatoSelecionado.email}</p>
            <p>{"Curtidas: " + props.candidatoSelecionado.curtidas}</p>
            <p>{"Descurtidas: " + props.candidatoSelecionado.descurtidas}</p>
            <p>Propostas:</p>
            <ul>

                {
                    props.candidatoSelecionado.propostas.map((proposta, i) => (
                        <li key={i}>{proposta}</li>
                    ))
                }
            </ul>
           <p>Questionamentos:</p>
           <input type="text" 
            value={questionamento}
            onChange={manipularMudanca}
            placeholder="Digite seu Questionamento"
            />
            <Button onClick={addItem}> Cadastrar </Button>
            <ul>
                {listaQuestionamento.map((questionamento, i) => {
                    <li key={i}>{questionamento}</li>
                })}
            </ul>

        </Container>
    );
}