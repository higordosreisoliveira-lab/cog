import type { CourseStructure } from '../../schema';

const s: CourseStructure = {
  id: 'problems',
  skill: 'logic',
  lessons: [
    { id: 'definir-o-problema', minutes: 4 },
    { id: 'dividir-em-partes', minutes: 5 },
    { id: 'hipoteses-e-dados', minutes: 5 },
    { id: 'de-tras-para-frente', minutes: 5 },
    { id: 'impacto-e-esforco', minutes: 4 },
    { id: 'comunicar-a-solucao', minutes: 4 },
  ],
};

export default s;
