interface ScanExample {
  name: string;
  image: string;
  explanation: string;
}

interface ScanType {
  id: number;
  name: string;
  fullName: string;
  examples: ScanExample[];
}

export const SCAN_CATEGORIES: ScanType[] = [
  {
    id: 1,
    name: 'Hematology',
    fullName: 'Hematology',
    examples: [
      {
        name: 'Bacilli in blood film',
        image: 'scans/Bacilli in blood film.png',
        explanation: '',
      },
      {
        name: 'Carcinoma cells infiltrating bone marrow with reactive fibrosis',
        image:
          'scans/Carcinoma cells infiltrating bone marrow with reactive fibrosis.png',
        explanation: '',
      },
      {
        name: 'Extreme neutrophil vacuolisation in sepsis',
        image: 'scans/Extreme neutrophil vacuolisation in sepsis.png',
        explanation: '',
      },
      {
        name: 'Gelatinous transformation ',
        image: 'scans/Gelatinous transformation.png',
        explanation: '',
      },
      {
        name: 'Histoplasmosis in bone marrow',
        image: 'scans/Histoplasmosis in bone marrow.png',
        explanation: '',
      },
      {
        name: 'LE cells in incubated bone marrow ',
        image: 'scans/LE cells in incubated bone marrow.png',
        explanation: '',
      },
    ],
  },
  {
    id: 2,
    name: 'Pathology',
    fullName: 'Pathology',
    examples: [
      {
        name: 'Alveolar Cell Carcinoma',
        image: 'scans/Alveolar Cell Carcinoma.jpg',
        explanation: '',
      },
      {
        name: 'Aortic Atherosclerosis',
        image: 'scans/Aortic Atherosclerosis.jpg',
        explanation: '',
      },
      {
        name: 'Breast Adenocarcinoma',
        image: 'scans/Breast Adenocarcinoma.jpg',
        explanation: '',
      },
      {
        name: 'Emphysema',
        image: 'scans/Emphysema.jpg',
        explanation: '',
      },
      {
        name: 'Meningioma',
        image: 'scans/Meningioma.jpg',
        explanation: '',
      },
      {
        name: 'Neurilemmoma',
        image: 'scans/Neurilemmoma.jpg',
        explanation: '',
      },
    ],
  },
  {
    id: 3,
    name: 'Microbiology',
    fullName: 'Microbiology',
    examples: [
      {
        name: 'Zoogloea',
        image: 'scans/Zoogloea.jpg',
        explanation: '',
      },
      {
        name: 'Chaetonotus',
        image: 'scans/Chaetonotus.jpg',
        explanation: '',
      },
      {
        name: 'Flagellate',
        image: 'scans/Flagellate.jpg',
        explanation: '',
      },
      {
        name: 'Stalked Ciliates',
        image: 'scans/Stalked Ciliates.jpg',
        explanation: '',
      },
      {
        name: 'Amoeba',
        image: 'scans/Amoeba.jpg',
        explanation: '',
      },
      {
        name: 'Purple Sulfur Bacteria',
        image: 'scans/Purple Sulfur Bacteria.jpg',
        explanation: '',
      },
    ],
  },
  {
    id: 4,
    name: 'Educational',
    fullName: 'Educational',
    examples: [
      {
        name: 'Human Eye',
        image: 'scans/Human Eye.png',
        explanation: '',
      },
      {
        name: 'Retina and Tapetum',
        image: 'scans/Retina and Tapetum.png',
        explanation: '',
      },
      {
        name: 'Closterium',
        image: 'scans/Closterium.webp',
        explanation: '',
      },
      {
        name: 'Bone Marrow under microscope',
        image: 'scans/Bone Marrow under microscope.png',
        explanation: '',
      },
      {
        name: 'Aluminum',
        image: 'scans/Aluminum.png',
        explanation: '',
      },
      {
        name: 'Plant Cells',
        image: 'scans/Plant Cells.png',
        explanation: '',
      },
    ],
  },
];
