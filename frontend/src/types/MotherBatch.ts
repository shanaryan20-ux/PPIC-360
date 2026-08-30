export type Unit = "KG" | "LAC";

export type BatchStatus =
  | "Pending"
  | "Dispensing"
  | "Granulation"
  | "Compression"
  | "Coating"
  | "Filling"
  | "QC"
  | "Packing"
  | "Completed";

export interface ChildBatch {
  id: number;
  childBatchNo: string;
  batchQty: number;
  unit: Unit;
  fgCode: string;
  brandName: string;
  packSize: string;
  foilSize: string;
  packingChangePart: string;
  status: BatchStatus;
}

export interface MotherBatch {
  id: number;
  batchNumber: string;
  entryDate: string;
  rpCode: string;
  motherBatchQty: number;
  unit: Unit;
  targetPackingDate: string;
  stage: "Dispensing";
  status: "Pending";
  childBatches: ChildBatch[];
}