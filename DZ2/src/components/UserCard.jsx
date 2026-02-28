import { Card } from "antd";
const { Meta } = Card;

export const UserCard = ({ name, age, city, active, img }) => {
  return (
    <Card
      hoverable
      style={{ width: 240, display: active ? "block" : "none" }}
      cover={<img draggable={false} alt="example" src={img} />}
    >
      <Meta title={"Name: " + name} description={"Age: " + age} />
      <Meta title={"City: " + city} />
    </Card>
  );
};
