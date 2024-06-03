import {
  Edit,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { Stack, InputAdornment } from "@mui/material";
import HeightIcon from "@mui/icons-material/Height";

const categories = [
  { id: 0, name: "Animals" },
  { id: 1, name: "Beard" },
  { id: 2, name: "Business" },
  { id: 3, name: "Cars" },
  { id: 4, name: "City" },
  { id: 5, name: "Flowers" },
  { id: 6, name: "Food" },
  { id: 7, name: "Nature" },
  { id: 8, name: "People" },
  { id: 9, name: "Sports" },
  { id: 10, name: "Tech" },
  { id: 11, name: "Travel" },
  { id: 12, name: "Water" },
];

export const ProductEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="reference" />
        <Stack direction="row" gap={1}>
          <SelectInput source="category_id" choices={categories} />
          <NumberInput
            source="price"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€</InputAdornment>
              ),
            }}
          />
          <NumberInput
            source="width"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HeightIcon
                    fontSize="small"
                    sx={{ transform: "rotate(90deg)" }}
                  />
                </InputAdornment>
              ),
            }}
          />
          <NumberInput
            source="height"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HeightIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <TextInput source="thumbnail" fullWidth />
        <TextInput source="description" fullWidth multiline />
      </SimpleForm>
    </Edit>
  );
};
