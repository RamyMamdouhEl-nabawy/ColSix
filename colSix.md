COLSIX Utility.

```jsx
import Card from "../../Card";

const Data = [
  {
    title: "Continuous Integration",
    description:
      "Android, iOS & cross-platform mobile continuous integration to deliver better software faster.",
    icon: "coding",
    ext: {
      data: {
        id: "1",
        title: "App Details",
        content: "1"
      },
      btnTxt: "APP 1 DETAILS"
    }
  },
  {
    title: "Enterprise Device Management",
    description:
      "Comprehensive solution for enterprises, to remotely monitor, control, and manage workforce mobile device.",
    icon: "enterprise",
    ext: {
      data: {
        id: "1",
        title: "App Details",
        content: "1"
      },
      btnTxt: "Number Of Devices"
    }
  }
];

handleClick = () => {
  alert("Hello There :D");
};

<ColSix Data={Data}>
  <Card handleClick={this.handleClick} />
</ColSix>;
```
