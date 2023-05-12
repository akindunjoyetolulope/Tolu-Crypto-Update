import styled from "@emotion/styled";
import ResourceItem, { ResourceItemWrapper } from "./ResourceItem";

export default function ResourceItemSkeleton() {
  const list = new Array(7).fill(0).map((_, i) => i + 1);

  return (
    <ResourceItemWrapper className="hidden mobile:block flex-1">
      {list.map((_, i) => (
        <ResourceItem
          key={i}
          id={i.toString()}
          itemTitle={<Pill style={{ width: "198px", height: "14px" }} />}
          subTitle={<Pill style={{ width: "77px", height: "12.5px" }} />}
          description={
            <Pill
              style={{ width: "130px", height: "14px", marginTop: "12px" }}
            />
          }
          action={
            <Pill
              style={{ width: "59px", height: "10px", marginTop: "12px" }}
            />
          }
        />
      ))}
    </ResourceItemWrapper>
  );
}

const Pill = styled.p`
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
  background-color: #eaeaea;
  border-radius: 16.8px;
`;
