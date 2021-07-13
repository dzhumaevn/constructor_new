import JSZip from "jszip";
import { saveAs } from "file-saver";

const SportEventsDownloader = {
  download(stage, sportEvents) {
    const sportEventsData = this.getData(stage, sportEvents);

    if ( sportEventsData.length === 1 ) {
      this.downloadSinglePic(sportEventsData[0]);
      return true;
    }

    if ( sportEventsData.length > 1 ) {
      this.downloadInZip(sportEventsData);
      return true;
    }

    return alert('Список отрисованных событий пуст.');
  },

  getData(stage, sportEvents) {
    const oldScale = stage.scale();
    const dataURIs = [];

    stage.scale({ x: 1, y: 1 });

    for ( const sportEvent of sportEvents ) {
      const dataURI = stage.toDataURL({
        x: sportEvent.x() + stage.x(),
        y: sportEvent.y() + stage.y(),
        width: sportEvent.width(),
        height: sportEvent.height(),
        mimeType: 'image/jpeg',
        pixelRatio: 1,
      });

      dataURIs.push({
        dataURI,
        fileName: sportEvent.attrs.fileName,
      });
    }

    stage.scale({ x: oldScale.x, y: oldScale.y })
    stage.batchDraw();

    return dataURIs;
  },

  downloadSinglePic({ dataURI, fileName }) {
    const link = document.createElement('a');
    link.download = fileName + '.jpeg';
    link.href = dataURI;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    link.remove();
  },

  downloadInZip(sportEvents) {
    const zip = new JSZip();
    const removeHeaderBase64 = (base64) => {
      return base64.substr(base64.indexOf(";base64,") + ";base64,".length)
    }

    sportEvents.forEach(({ dataURI, fileName }) => {
      zip.file(fileName + '.jpeg', removeHeaderBase64(dataURI), { base64: true });
    });

    zip.generateAsync({ type: "blob" })
       .then(content => {
         saveAs(content, "top_events.zip");
       })
       .catch(err => console.error("Не удалось экспортировать сторисы.", err));
  },
};

export default SportEventsDownloader;