import { Result, Button } from "antd";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, this page does not exist."
        extra={
          <Link href="/dashboard">
            <Button type="primary">Back Dashboard</Button>
          </Link>
        }
      />
    </div>
  );
}
