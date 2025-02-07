import { IIndexPanel } from "@/components/IndexPanel/IndexPanel.types";

export interface IDocumentSection {
  descriptionText: string;
  useCaseText: string;
  designReferenceCount: number;
  refs: {
    explanationRef: IIndexPanel["explanationRef"];
    exampleRef: IIndexPanel["exampleRef"];
    referenceRef: IIndexPanel["referenceRef"];
  };
}

export interface IDocumentArticle {
  documentSection: string;
  titleText: string;
  bodyText: string;
  ref: React.RefObject<HTMLElement>;
}
