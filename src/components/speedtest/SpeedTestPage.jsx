import {
  Button,
  Col,
  Image,
  Row,
  Typography,
  Statistic,
  Card,
  message,
} from "antd";
import {
  BarcodeOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  HomeOutlined,
  FieldTimeOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import speed from "../../images/speed.png";

const { Title } = Typography;

const SpeedTestPage = () => {
  const [data, setData] = useState({
    downloadSpeed: 0,
    uploadSpeed: 0,
    downloaded: 0,
    uploaded: 0,
    latency: 0,
    bufferBloat: 0,
    userLocation: " - ",
    userIp: "0.0.0.0",
  });
  const [loading, setLoading] = useState(false);
  const [btnStatus, setBtnStatus] = useState(0);

  const config = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  };

  const onSubmit = () => {
    setLoading(true);
    setBtnStatus(1);
    axios
      .post("http://localhost:4000/speed", config)
      .then((val) => {
        setLoading(false);
        setData(val.data.data);
      })
      .catch((err) => {
        setLoading(false);
        message.error("Something went Wrong !", 5);
      });
  };

  return (
    <div>
      <Row justify="center">
        <Col>
          <Image src={speed} preview={false} width={250} />
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: 25 }}>
        <Col>
          <Title type="secondary">NOD INTERNET SPEED METER</Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 25 }}>
        <Col>
          <Button
            loading={loading}
            type="dashed"
            danger
            size="large"
            shape="round"
            onClick={() => onSubmit()}
          >
            {btnStatus === 0 ? (
              "Start"
            ) : (
              <>
                <RedoOutlined /> Start Again
              </>
            )}
          </Button>
        </Col>
      </Row>
      <Row gutter={16} justify="center" style={{ marginTop: 25 }}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Download Speed"
              value={data?.downloadSpeed}
              precision={2}
              valueStyle={{
                color: "#277BC0",
              }}
              prefix={<ArrowDownOutlined />}
              suffix="Mbps"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Upload Speed"
              value={data.uploadSpeed}
              precision={2}
              valueStyle={{
                color: "#38E54D",
              }}
              prefix={<ArrowUpOutlined />}
              suffix="Mbps"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Latency"
              value={data.latency}
              precision={2}
              valueStyle={{
                color: "#98A8F8",
              }}
              prefix={<FieldTimeOutlined />}
              suffix="ms"
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} justify="center" style={{ marginTop: 25 }}>
        <Col span={9}>
          <Card>
            <Statistic
              title="User Location"
              value={data?.userLocation}
              valueStyle={{
                color: "#FFB200",
              }}
              prefix={<HomeOutlined />}
            />
          </Card>
        </Col>
        <Col span={9}>
          <Card>
            <Statistic
              title="User IP"
              value={data.userIp}
              valueStyle={{
                color: "#cf1322",
              }}
              prefix={<BarcodeOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SpeedTestPage;
