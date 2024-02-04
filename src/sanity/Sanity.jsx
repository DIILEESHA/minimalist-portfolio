import { createClient } from "@sanity/client";

export default createClient({
  projectId: "hl7l7rdy",
  dataset: "production",
  apiVersion: "2021-10-21", 
  useCdn: true, 
  authProvider: { projectId: "hl7l7rdy" },
});