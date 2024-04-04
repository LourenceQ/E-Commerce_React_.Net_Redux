import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
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
      <CardHeader
        avatar={<Avatar>{product.name?.charAt(0).toUpperCase()}</Avatar>}
        title={product.name}
      />
      <CardMedia
        sx={{ height: 140 }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardMedia image="http://picsum.photos/200" title="title" />
      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5">
          {product.price}
        </Typography>
        <Typography  color='text.secondary' variant="body2">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}
