import {
  Datagrid,
  List,
  NumberField,
  ImageField,
  ReferenceField,
  TextField,
} from "react-admin";

export const ProductList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="reference" />
        <ImageField
          source="thumbnail"
          label="Image"
          sx={{ "& .RaImageField-image": { width: "auto" } }}
        />
        <TextField source="description" />
        <ReferenceField source="category_id" reference="categories" />
        <NumberField
          source="price"
          options={{ style: "currency", currency: "EUR" }}
        />
        <NumberField source="stock" />
        <NumberField source="width" />
        <NumberField source="height" />
      </Datagrid>
    </List>
  );
};
