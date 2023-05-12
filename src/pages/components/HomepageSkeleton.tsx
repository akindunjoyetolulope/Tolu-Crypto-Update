import ResourceItemSkeleton from "../../components/ResourceItemSkeleton";
import TableSkeleton from "../../components/TableSkeleton";

const HomepageSkeleton = () => {
  return (
    <>
      {/* desktop view */}
      <TableSkeleton />

      {/* mobile view */}
      <ResourceItemSkeleton />
    </>
  );
};

export default HomepageSkeleton;
