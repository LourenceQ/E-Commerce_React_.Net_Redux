import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/products";
interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardMedia
        image="http://picsum.photos/200"
        title="title"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
