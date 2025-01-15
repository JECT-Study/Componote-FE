import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

const InteractionContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border-radius: ${DESIGN_SYSTEM.radius.sm};
  background: #c85c1912;

  /* 디자인 QA 시 논의 (인터랙션 시 컴포넌트가 전체적으로 불투명해지지 않는 문제 발생) */
  /* background: ${({ theme }) => theme.light["fill-trans-disabled"]}; */
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border-radius: ${DESIGN_SYSTEM.radius.sm};
  background: #e7e7e794;
`;

export function DisabledInteraction() {
  return (
    <>
      <InteractionContainer />
      <OverlayContainer />
    </>
  );
}

const DimmedScreenContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border-radius: ${DESIGN_SYSTEM.radius.xs};
  background: ${({ theme }) => theme.light["surface-dimmed"]};

  z-index: 2;
`;

export function DimmedScreen() {
  return <DimmedScreenContainer />;
}
