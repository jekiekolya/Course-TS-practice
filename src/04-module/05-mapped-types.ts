type PcBrand = {
  name: string;
  country: string;
  createdAt: Date;
};

type Brands = 'apple' | 'lenovo' | 'hp';

type MyPcRecord = {
  [Key in Brands]?: PcBrand;
};

const brandRecord: MyPcRecord = {
  apple: {
    name: 'X',
    country: 'USA',
    createdAt: new Date(),
  },
};

function printPcCatalog(pcCatalog: MyPcRecord) {
  console.log(pcCatalog.apple?.country);
}
// ---------------------------------------------------------------------------------------------------
type PartOfWindow = {
  [Key2 in 'document' | 'screen' | 'navigator']?: Window[Key2];
};

const p: PartOfWindow = {
  document: window.document,
};

export {};
