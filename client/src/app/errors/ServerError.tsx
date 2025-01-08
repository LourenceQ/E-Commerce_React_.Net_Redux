import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";


export default function ServerError() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography variant="h5" gutterBottom>
            Server Error
          </Typography>
          <Divider />
          <Typography>
            {state.error.detail || "Internal server eror"}
          </Typography>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          Server Error
        </Typography>
      )}
      <Button onClick={() => navigate.bind("/catalog")}>
        Go back to the store
      </Button>
    </Container>
  );
}
