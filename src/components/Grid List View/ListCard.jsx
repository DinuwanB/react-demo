import { Avatar, Card } from "antd";
const { Meta } = Card;

const ListCard = () => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Card hoverable>
        <Meta
          avatar={
            <Avatar
              shape="square"
              size={{ md: 140, lg: 140, xl: 140, xxl: 140 }}
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
          title="Sample Card List View"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </Card>
    </div>
  );
};

export default ListCard;
