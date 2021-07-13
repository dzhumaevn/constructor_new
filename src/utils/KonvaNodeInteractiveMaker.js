import Konva from "konva";

const KonvaNodeInteractiveMaker = {
  _interactiveNodes: [],

  _transformer: null,

  makeInteractive(node, layer) {
    if ( this._transformer ) return;

    this._transformer = new Konva.Transformer({
      nodes: [ node ],
      boundBoxFunc: (oldBox, newBox) => {
        if ( newBox.width < 10 || newBox.height < 10 ) {
          return oldBox;
        }
        return newBox;
      },
    })

    node.setAttr('draggable', true);

    if ( !layer.children.includes(this._transformer) ) {
      layer.add(this._transformer);
    }

    this._interactiveNodes.push(node);
  },

  resetInteractiveAllNodes() {
    if ( this._transformer ) {
      this._transformer.destroy();
      this._transformer = null;
    }

    this._interactiveNodes.forEach(node => node.setAttr('draggable', false));
    this._interactiveNodes = [];
  },

  getInteractiveNodes() {
    return this._interactiveNodes;
  }
};

export default KonvaNodeInteractiveMaker;