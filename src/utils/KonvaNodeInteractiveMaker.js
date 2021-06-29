import Konva from "konva";

const KonvaNodeInteractiveMaker = {
  _interactiveNodes: [],

  _transformer: new Konva.Transformer({
    nodes: [],
    boundBoxFunc: (oldBox, newBox) => {
      if ( newBox.width < 10 || newBox.height < 10 ) {
        return oldBox;
      }
      return newBox;
    },
  }),

  makeInteractive(node, layer) {
    this._transformer.nodes([node]);
    node.setAttr('draggable', true);

    if (!layer.children.includes(this._transformer)) {
      layer.add(this._transformer);
    }

    this._interactiveNodes.push(node);
  },

  resetInteractiveAllNodes() {
    this._transformer.nodes([]);
    this._interactiveNodes.forEach(node => node.setAttr('draggable', false));
    this._interactiveNodes = [];
  },

  getInteractiveNodes() {
    return this._interactiveNodes;
  }
};

export default KonvaNodeInteractiveMaker;