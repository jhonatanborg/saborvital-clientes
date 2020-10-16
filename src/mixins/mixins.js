export default {
  methods: {
    convertMoney(money) {
      if (money > 0) {
        const toCurrency = (n, curr, LanguageFormat = undefined) =>
          Intl.NumberFormat(LanguageFormat, {
            style: "currency",
            currency: curr,
          }).format(n);
        return toCurrency(money, "BRL");
      } else {
        return "Grátis";
      }
    },
    statuspurchase(status) {
      let statusColor;
      switch (status) {
        case "Pendente":
          statusColor = "warning";
          break;
        case "Confirmado":
          statusColor = "purple";
          break;
        case "Saiu para Entrega":
          statusColor = "primary";
          break;
        case "Entregue":
          statusColor = "green";
          break;
        case "Cancelado":
          statusColor = "red";
          break;
        case "Finalizado":
          statusColor = "light-green";
          break;
        default:
          break;
      }
      return statusColor;
    },
    convertDate(date) {
      return date
        .substr(0, 10)
        .split("-")
        .reverse()
        .join("/");
    },
  },
};
