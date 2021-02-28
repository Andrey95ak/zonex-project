import vars from "../_vars";

if (vars.$marketing) {
  vars.$marketing.addEventListener("click", e => {
    if (e.target.classList.contains("marketing__close")) {
      vars.$marketing.classList.remove("marketing--visible");
    }
  });

  let counter = 0;

  const data = [
    {
      title: "Title of product 1",
      where: "Russia, Moscow"
    },
    {
      title: "Title of product 2",
      where: "Ukraine, Kiev"
    },
    {
      title: "Title of product 3",
      where: "Italy, Rome"
    }
  ];

  const changeMarketingData = () => {
    vars.$marketing.classList.remove("marketing--visible");

    setTimeout(() => {
      vars.$marketing.classList.add("marketing--visible");
    }, 3000);

    const stringTitle = `${data[counter].title}`;
    const stringWhere = `15 minutes ago ${data[counter].where}`;

    vars.$marketing.querySelector(
      ".marketing__title"
    ).textContent = stringTitle;
    vars.$marketing.querySelector(
      ".marketing__when-from"
    ).textContent = stringWhere;

    counter++;

    if (counter === data.length) {
      counter = 0;
    }
  };

  changeMarketingData()

  setInterval(changeMarketingData, 5000)
}
