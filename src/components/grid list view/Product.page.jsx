import { useState } from "react";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Button, Row } from "antd";
import GridView from "./Grid";
import ListView from "./ListView";

const ProductPage = () => {
  const [view, setView] = useState(false);

  return (
    <>
      <div
        style={{ textAlign: "center", marginTop: "1rem", marginBottom: "1rem" }}
      >
        {view === true ? (
          <>
            <Button
              size="large"
              onClick={() => setView(false)}
              icon={
                <UnorderedListOutlined
                  style={{ fontSize: "1.5rem", color: "black" }}
                />
              }
            />
          </>
        ) : (
          <>
            <Button
              size="large"
              onClick={() => setView(true)}
              icon={
                <AppstoreOutlined
                  style={{ fontSize: "1.5rem", color: "black" }}
                />
              }
            />
          </>
        )}
      </div>

      {view === true ? (
        <>
          <Row gutter={[20, 20]}>
            <GridView />
            <GridView />
            <GridView />
            <GridView />
            <GridView />
            <GridView />
          </Row>
        </>
      ) : (
        <>
          <ListView />
          <ListView />
          <ListView />
          <ListView />
          <ListView />
        </>
      )}
    </>
  );
};

export default ProductPage;
