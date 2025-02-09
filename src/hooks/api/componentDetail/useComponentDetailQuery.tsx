import { componentDetail } from "@/api/componentDetail";
import { IComponentDetail } from "@/types/api/componentDetail";
import { useQuery } from "@tanstack/react-query";

const useComponentDetailQuery = (componentId: number) => {
  const fetchComponenetDetail = async () => {
    const response = await componentDetail(componentId);
    return response;
  };

  return useQuery<unknown, Error, IComponentDetail>({
    queryKey: ["componentDetail", componentId],
    queryFn: fetchComponenetDetail,
    enabled: !!componentId,
  });
};

export default useComponentDetailQuery;
