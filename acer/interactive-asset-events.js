/**
 * Service to allow the interactive asset to communicate with Delivery Client 
 */
window.ACERInteractiveAsset = new class {
  constructor() {
    this.setDataCb = null;
    this.getDataCb = null;
  }

  emitEvent(data) {
    const ev = new CustomEvent('acer-interactive-asset-event', { detail: data });
    document.dispatchEvent(ev);
  }

  listenToGetAssetData(cb) {
    this.getDataCb = cb;
  }

  listenToSetAssetData(cb) {
    this.setDataCb = cb;
  }

  setData(data) {
    if (!this.setDataCb) return;
    this.setDataCb(data);
  }

  getData(cb) {
    if (this.getDataCb) {
      this.getDataCb((data) => { cb(data); });
    } else {
      cb();
    }
  }
};
