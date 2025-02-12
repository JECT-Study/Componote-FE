import { useRouter } from "next/navigation";
import { BadgeLabel, Button, CardDesignSystem } from "@/components";
import { BadgeLabelFeedback } from "@/components/Badge/Badge.types";
import { ButtonStyle } from "@/components/Button/Button.types";
import { DESIGN_SYSTEM_CHIP_GROUP } from "@/constants/chipGroup";
import {
  contentFilterLabels,
  deviceFilterLabels,
  techFilterLabels,
} from "@/constants/designSystemFilterLabel";
import { IDesignSystemData } from "@/types/api/designSystem";
import {
  ContentFilter,
  DesignSystemFilterType,
  DeviceFilter,
  TechFilter,
} from "@/types/enum/designSystemFilters";

export default function DesignSystemCard({
  designSystem,
}: {
  designSystem: IDesignSystemData;
}) {
  const router = useRouter();
  const deviceLabels = designSystem.filters.filter(
    (value) => value.type === DesignSystemFilterType.DEVICE,
  );
  const labels = designSystem.filters.filter(
    (value) =>
      value.type === DesignSystemFilterType.TECH ||
      value.type === DesignSystemFilterType.CONTENT,
  );
  const platformLabels = designSystem.filters.filter(
    (value) => value.type === DesignSystemFilterType.PLATFORM,
  );

  const websiteLinks = designSystem.links.filter(
    (value) => value.type === "website",
  );

  return (
    <CardDesignSystem
      key={`designSystemcard-${designSystem.name}`}
      $src={designSystem.thumbnailUrl}
      designSystemName={designSystem.name}
      organizationName={designSystem.organizationName}
      descriptionText={designSystem.description}
      onClick={() => router.push(websiteLinks[0].url)}
      $bookmarkCount="999+"
      deviceLabels={deviceLabels.map((deviceLabel) =>
        deviceLabel.values.map((deviceName) => (
          <BadgeLabel
            key={`deviceLabel-${deviceName}`}
            $variant="labelOnly"
            text={deviceFilterLabels[deviceName as DeviceFilter]}
            $feedback={BadgeLabelFeedback.NONE}
            $style="solid"
            $size="xs"
          />
        )),
      )}
      labels={labels.map((label) =>
        label.values.map((labelName) => (
          <BadgeLabel
            key={`label-${label}`}
            $variant="labelOnly"
            text={
              label.type === "TECH"
                ? techFilterLabels[labelName as TechFilter]
                : contentFilterLabels[labelName as ContentFilter]
            }
            $feedback={BadgeLabelFeedback.NONE}
            $style="transparent"
            $size="xs"
          />
        )),
      )}
      platformButtons={platformLabels.map((platformLabel) =>
        platformLabel.values.map((platformName) => {
          const link = designSystem.links.find(
            (link) => link.type === platformName.toLowerCase(),
          );

          return (
            <Button
              key={`platformButton-${platformName}`}
              text={platformName}
              $size="md"
              $buttonType="iconButton"
              onClick={() => {
                if (link) router.push(link.url);
              }}
              $leftIcon={
                DESIGN_SYSTEM_CHIP_GROUP.platform.contents.find(
                  (content) => content.responseName === platformName,
                )?.icon
              }
              $buttonStyle={ButtonStyle.OutlinedSecondary}
            />
          );
        }),
      )}
    />
  );
}
