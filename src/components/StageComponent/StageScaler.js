const StageScaler = {
  stage: null,
  scaleBy: 1.03,

  onKeyDown: function (e, argStage) {
    if ( e.ctrlKey ) {
      this.stage = argStage;
      this.stage.on('wheel', (e) => this._scaler(e));
    }
  },

  onKeyUp: function (e, argStage) {
    if ( !e.ctrlKey ) {
      this.stage = argStage;
      this.stage.eventListeners.wheel = [];
    }
  },

  _scaler: function (e) {
    e.evt.preventDefault();

    const oldScale = this.stage.scaleX();
    const pointer = this.stage.getPointerPosition();
    const mousePointTo = {
      x: (pointer.x - this.stage.x()) / oldScale,
      y: (pointer.y - this.stage.y()) / oldScale,
    };

    const newScale = e.evt.deltaY > 0 ? oldScale * this.scaleBy : oldScale / this.scaleBy;

    this.stage.scale({ x: newScale, y: newScale });

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };

    this.stage.position(newPos);
    this.stage.batchDraw();
  }
};

export default StageScaler;