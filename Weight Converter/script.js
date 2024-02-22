const result = document.createElement("p");
result.id = "result";



const changeWeight = () => {
  const { fromUnit, toUnit, input } = getValues();

  if (isNaN(input)) {
    return "Please enter a valid weight.";
  }

  switch (fromUnit) {
    case "kg":
      switch (toUnit) {
        case "kg":
          return input;

        case "g":
          return input * 1000;

        case "po":
          return input * 2.205;
      }
      break;

    case "g":
      switch (toUnit) {
        case "g":
          return input;

        case "kg":
          return input / 1000;

        case "po":
          return (input / 1000) * 2.205;
      }
      break;
    case "po":
      switch (toUnit) {
        case "po":
          return input;

        case "kg":
          return input / 2.205;

        case "g":
          return (input * 1000) / 2.205;
      }
      break;
  }
};



document.body.appendChild(result);
