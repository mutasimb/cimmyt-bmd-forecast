const {
  NCDIR,
  HPCHOST,
  HPCUSER,
  HPCPASS,
  HPCPATH,
  DOWNLOADPATH,
  GCPHOST,
  GCPUSER,
  GCPKEY,
  GCPPATH,
  MUNGBEANFILESDIR,
  EKRISHOKAPIHOST,
  EKRISHOKAPIPUBLICKEY,
  EKRISHOKAPIPOSTMANTOKEN,
  WBHOST,
  WBUSER,
  WBPASS,
  WBPATH
} = process.env;

module.exports = {
  ncPath: NCDIR,
  hostBMD: HPCHOST,
  userBMD: HPCUSER,
  passBMD: HPCPASS,
  pathBMDOutput: HPCPATH,
  pathDownload: DOWNLOADPATH,
  hostGCP: GCPHOST,
  userGCP: GCPUSER,
  pathGCPKey: GCPKEY,
  pathGCPOutput: GCPPATH,
  mungbeanPath: MUNGBEANFILESDIR,
  ekrishokHost: EKRISHOKAPIHOST,
  ekrishokPublicKey: EKRISHOKAPIPUBLICKEY,
  ekrishokToken: EKRISHOKAPIPOSTMANTOKEN,
  hostWB: WBHOST,
  userWB: WBUSER,
  passWB: WBPASS,
  pathWB: WBPATH
};