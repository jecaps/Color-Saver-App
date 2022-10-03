import { nanoid } from "nanoid";

export const colorsData = [
  {
    id: nanoid(),
    title: "Color Palette 1",
    colors: [
      { id: nanoid(), hexCode: "#B9E28C" },
      { id: nanoid(), hexCode: "#5B618A" },
      { id: nanoid(), hexCode: "#9B5094" },
      { id: nanoid(), hexCode: "#EF5B5B" },
      { id: nanoid(), hexCode: "#20A39E" },
    ],
  },
  {
    id: nanoid(),
    title: "Color Palette 2",
    colors: [
      { id: nanoid(), hexCode: "#CFFFE5" },
      { id: nanoid(), hexCode: "#FFAD69" },
      { id: nanoid(), hexCode: "#F5E663" },
      { id: nanoid(), hexCode: "#6F2DBD" },
      { id: nanoid(), hexCode: "#E13700" },
    ],
  },
];
