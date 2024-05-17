import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import agent from "../../app/api/agent";

export default function AboutPage() {
    return (
        <Container>
            <Typography gutterBottom variant='h2'>Errors for testing purpose page</Typography>
            <ButtonGroup fullWidth>
                <Button variant='contained' onClick={() => agent.TestErrors.get400Error()}>Teste 400 Error</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.get400Error()}>Teste 401 Error</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.get400Error()}>Teste 404 Error</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.get400Error()}>Teste 400 Error</Button>
                <Button variant='contained' onClick={() => agent.TestErrors.get400Error()}>Teste Validation Error</Button>
            </ButtonGroup>
        </Container>
    )
}