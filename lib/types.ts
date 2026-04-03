export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  modality: "remoto" | "presencial" | "híbrido";
  salary: {
    min: number;
    max: number;
    currency: "MXN" | "USD";
  };
  description: string;
  publishedAt: string;
  tags: string[];
}
