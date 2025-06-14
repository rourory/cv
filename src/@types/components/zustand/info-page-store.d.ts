type InfoBlockTypes = "frontend" | "backend" | "info";
interface InfoPageStore {
  selectedBlock: InfoBlockTypes;
  setSelectedBlock: (block: InfoBlockTypes) => void;
}
